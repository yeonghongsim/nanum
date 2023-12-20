import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";
import RectangleBtnWithLink01 from "../../button/RectangleBtnWithLink01";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.isOn ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 50rem;
    height: 30rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    // padding: 1rem 10rem 1rem 10rem;
    // box-sizing: border-box;
`;
const ModalContent = styled.div`
    width: 100%;
    height: calc(100% - 6rem);
    padding: 1rem;
    border-bottom: 1px solid ${COLORS.lightgrayColor};
    box-sizing: border-box;
`;
const TextContent = styled.p`
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
`;
const ModalFoot = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    box-sizing: border-box;
`;
const BtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

export default function ResisterItemModal({ isOn, setIsOnModal, content, preparedData }) {
    const modalRef = useRef(null);
    // cancel btn click
    const handleCancelClick = () => {
        setIsOnModal(!isOn);
    };
    // resister btn click
    const handleConfirmClick = async () => {
        console.log('resister fetch start');
        console.log(preparedData);
        // DB에 데이터 등록 후 페이지 이동
        try {
            const response = await fetch('http://localhost:8080/users/registerItem', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(preparedData)
            })

            // 서버 응답 후 필요한 로직
            if (response.ok) {
                console.log('success');
                // 등록 후 화면 이동
                window.location.href = '/users/itemList';
            }
            else { console.log('fail') }
        } catch (error) { console.log('통신 오류: ', error) }

    };
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                // 모달 외부를 클릭했을 때 모달을 닫습니다.
                setIsOnModal(false);
            }
        };
        // 컴포넌트가 마운트될 때 document에 이벤트 리스너를 등록합니다.
        document.addEventListener("mousedown", handleOutsideClick);
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setIsOnModal]);

    return (
        <Wrapper isOn={isOn}>
            <Container ref={modalRef}>
                <ModalContent>
                    <TextContent>
                        {content}
                    </TextContent>
                </ModalContent>
                <ModalFoot>
                    <BtnWrapper onClick={handleCancelClick}>
                        <RectangleBtnWithLink01
                            content="취소하기"
                            backgroundColor={COLORS.middlegrayColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                    <BtnWrapper onClick={handleConfirmClick}>
                        <RectangleBtnWithLink01
                            content="등록하기"
                            backgroundColor={COLORS.linkColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                </ModalFoot>
            </Container>
        </Wrapper>
    )
}