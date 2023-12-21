import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";
import { useEffect, useRef } from "react";

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
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 80%;
        height: 60%;
    }
`;
const ImageListContainer = styled.div`
    width: 100%;
    min-height: 40rem;
    max-height: 40rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
const ImageWrapper = styled.div`
    width: 24.25rem;
    height: 24.25rem;
    border-radius: 0.5rem;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    object-fit: cover;
`;
const CloseBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 4rem;
    border-radius: 1rem;
    background-color: ${COLORS.middlegrayColor};
    color: white;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    &:hover {
        cursor: pointer;
    }
`;
const Text = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: normal;
`;

export default function ItemDetailMoreImgModal({ isOn, setIsModalOpen, imageList, ...props }) {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                // 모달 외부를 클릭했을 때 모달을 닫습니다.
                setIsModalOpen(false);
            }
        };
        // 컴포넌트가 마운트될 때 document에 이벤트 리스너를 등록합니다.
        document.addEventListener("mousedown", handleOutsideClick);
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setIsModalOpen]);

    return (
        <Wrapper isOn={isOn}>
            <Content ref={modalRef}>
                <ImageListContainer>
                    {
                        imageList.map((image, index) => (
                            <ImageWrapper key={index}>
                                <Image
                                    src="/images/house1.jpeg"
                                // src={image.fileURL}
                                // alt={image.fileName}
                                ></Image>
                            </ImageWrapper>
                        ))
                    }
                </ImageListContainer>
                <CloseBtn onClick={props.handleModalClose}>
                    <Text>닫기</Text>
                </CloseBtn>
            </Content>
        </Wrapper>
    )
}