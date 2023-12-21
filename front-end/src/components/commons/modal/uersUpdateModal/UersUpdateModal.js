import { useEffect, useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../commons/styles/COLORS";
import RectangleBtn03 from "../../button/RectangleBtn03";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: ${(props) => (props.isOn ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 100rem;
    height: 50rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        width: 80%;
        height: 60%;
    }
`;
const ModalHead = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 0.1rem solid ${COLORS.primaryColor};
`;
const TextHead = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
    padding-left: 1rem;
`;
const ModalBody = styled.div`
    width: 100%;
    height: calc(100% - 10rem);
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
`;
const BtnContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
`;
const BtnWrapper = styled.div`
    width: 9rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AskUpdateText = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
    position: absolute;
    bottom: 2rem;
    left: 1rem;
`;

export default function UersUpdateModal({
    isOn,
    setIsOpenModal,
    handleCloseModal,
    preparedData,
    ...props
}) {
    // 모달 ref
    const modalRef = useRef(null);
    // 모달 외각 클릭 시 모달 닫힘 함수
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                // 모달 외부를 클릭했을 때 모달을 닫습니다.
                setIsOpenModal(false);
            }
        };
        // 컴포넌트가 마운트될 때 document에 이벤트 리스너를 등록합니다.
        document.addEventListener("mousedown", handleOutsideClick);
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setIsOpenModal]);
    // http 통신 전 업데이트할 데이터 확인 콘솔
    console.log(preparedData);
    // fetch post 함수 코드 예정.

    return (
        <Wrapper isOn={isOn}>
            <Content ref={modalRef}>
                <ModalHead>
                    <TextHead>
                        변경하신 내용은
                    </TextHead>
                </ModalHead>
                <ModalBody>
                    변경된 내용 보여주기
                    <AskUpdateText>
                        입니다. 정말로 변경하시겠습니까?
                    </AskUpdateText>
                </ModalBody>
                <BtnContainer>
                    <BtnWrapper>
                        <RectangleBtn03
                            backgroundColor={COLORS.middlegrayColor}
                            content='취소하기'
                            onClick={handleCloseModal}
                        ></RectangleBtn03>
                    </BtnWrapper>
                    <BtnWrapper>
                        <RectangleBtn03
                            backgroundColor={COLORS.linkColor}
                            content='변경하기'
                        ></RectangleBtn03>
                    </BtnWrapper>
                </BtnContainer>
            </Content>
        </Wrapper>
    )
}