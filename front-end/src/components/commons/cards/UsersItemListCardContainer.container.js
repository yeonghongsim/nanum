import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 29rem;
    height: 30rem;
    // border: 1px solid black;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 1024px) {
        width: 22rem;
        height: 23rem;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 30rem;
    }
`;
const CardImgContainer = styled.div`
    width: 100%;
    height: 70%;
    border-radius: 0.5rem 0.5rem 0 0;
    overflow: hidden;
    position: relative;
`;
const CardImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.8s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(${currentIndex * -100}%)`};
    &:hover {
        cursor: pointer;
    }
`;
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
    object-fit: cover;
`;
const CardInfoContainer = styled.div`
    width: 100%;
    height: 30%;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
`;
const CardHead = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
`;
const CardContent = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
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
    // border: 1px solid black;
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

export default function UsersItemListCardContainer({ item, ...props }) {
    // 전달받은 item 확인
    // console.log(item);
    // 현재 이미지의 index
    const [currentIndex, setCurrentIndex] = useState(0);
    // chevron 사용을 위해 최초,마지막 이미지 여부 확인
    const isAtFirstImage = currentIndex === 0;
    const isAtLastImage = currentIndex === item.imageList.length - 1;
    // 다음 이미지 보기 함수
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : item.imageList.length - 1));
    };
    // 이전 이미지 보기 함수
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < item.imageList.length - 1 ? prevIndex + 1 : 0));
    };
    const navigate = useNavigate();
    const handleItemId = (itemId) => {
        // navigate(`/itemDetail/${id}`);
        navigate(`/itemDetail/${itemId}`);
    };

    return (
        <CardContainer>
            <CardImgContainer>
                <CardImgWrapper currentIndex={currentIndex}>
                    {
                        item.imageList.map((image, index) => (
                            <CardImg
                                key={index}
                                src={image.fileUrl}
                                alt={image.fileName}
                                onClick={() => handleItemId(item._id)}
                            ></CardImg>
                        ))
                    }
                </CardImgWrapper>
                {item.imageList.length > 1 && (
                    <>
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
                    </>
                )}
            </CardImgContainer>
            <CardInfoContainer>
                <CardHead>{item.itemName}</CardHead>
                <CardContent>{item.itemTypeList}</CardContent>
            </CardInfoContainer>
        </CardContainer>
    )
}