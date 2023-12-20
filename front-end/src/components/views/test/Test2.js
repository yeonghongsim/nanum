import { useState } from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 80rem;
    height: 70rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ImgBox = styled.div`
    width: 25rem;
    height: 25rem;
    border-radius: 0.5rem;
    display: flex;
    overflow: hidden;
    position: relative;
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.8s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(${currentIndex * -25}rem)`};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    /* 이미지를 박스에 맞추되 비율을 유지하며 자르기 */
    object-fit: cover;
    border-radius: 0.5rem;
`;
const ChevronLeftDiv = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 45%;
    left: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }
`;
const ChevronRightDiv = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 45%;
    right: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }
`;
const ChevronLeft = styled.img`
    width: 50%;
    height: 50%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
`;
const ChevronRight = styled.img`
    width: 50%;
    height: 50%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
`;

export default function Test2() {
    const imageList = ['house1.jpeg', 'house2.jpeg', 'house3.jpeg', 'house4.jpeg', 'house5.jpeg'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAtFirstImage = currentIndex === 0;
    const isAtLastImage = currentIndex === imageList.length - 1;

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imageList.length - 1));
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < imageList.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <Wrapper>
            <Container>
                <ImgBox>
                    <ImageWrapper currentIndex={currentIndex}>
                        {
                            imageList.map((image, index) => (
                                <Image src={`/images/${image}`} alt={image} key={index}></Image>
                            ))
                        }
                    </ImageWrapper>
                    {isAtLastImage ? null : (
                        <ChevronRightDiv onClick={handleNextImage}>
                            <ChevronRight src="/icons/icon_chevronRight.svg"></ChevronRight>
                        </ChevronRightDiv>
                    )}
                    {isAtFirstImage ? null : (
                        <ChevronLeftDiv onClick={handlePreviousImage}>
                            <ChevronLeft src="/icons/icon_chevronLeft.svg"></ChevronLeft>
                        </ChevronLeftDiv>
                    )}
                </ImgBox>
            </Container>
        </Wrapper>
    )
}