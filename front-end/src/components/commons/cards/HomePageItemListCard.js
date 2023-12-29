import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CardContainer = styled.div`
    width: 24rem;
    height: 24rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 20rem;
        height: 20rem;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 20rem;
    }
`;
const CardImgContainer = styled.div`
    width: 100%;
    height: 65%;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid ${COLORS.middlegrayColor};
    box-sizing: border-box;
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
const Img = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
`;
const CardInfoContainer = styled.div`
    width: 100%;
    height: 35%;
    border-radius: 0 0 0.5rem 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.5rem;
`;
const TextCardName = styled.h1`
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
`;
const TextCardAddress = styled.p`
    font-size: 1.4rem;
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
const LikeWrapper = styled.div`
    display: ${(props) => (props.isOn ? 'block' : 'none')};
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`;
const LikeBtn = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    transform: rotate(45deg);
    // transition: all 0.8s;
    position: relative;
    border-bottom: 2px solid ${COLORS.middlegrayColor};
    border-right: 2px solid ${COLORS.middlegrayColor};
    opacity: 0.7;
    &::before{
        content: "";
        width: 50%;
        height: 93.5%;
        left: -45%;
        background-color: white;
        position: absolute;
        border-radius: 3rem 0 0 3rem;
        border-top: 2px solid ${COLORS.middlegrayColor};
        border-bottom: 2px solid ${COLORS.middlegrayColor};
        border-left: 2px solid ${COLORS.middlegrayColor};
        // transition: all 0.8s;
    }
    &::after{
        content: "";
        width: 93.5%;
        height: 50%;
        top: -45%;
        background-color: white;
        position: absolute;
        border-radius: 3rem 3rem 0 0;
        border-top: 2px solid ${COLORS.middlegrayColor};
        border-left: 2px solid ${COLORS.middlegrayColor};
        border-right: 2px solid ${COLORS.middlegrayColor};
        // transition: all 0.8s;
    }
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.likeColor};
        opacity: 1;
    }
    &:hover:after {
        cursor: pointer;
        background-color: ${COLORS.likeColor};
    }
    &:hover:before {
        cursor: pointer;
        background-color: ${COLORS.likeColor};
    }
`;

export default function HomePageItemListCard({ item, isLogin, ...props }) {
    const navigate = useNavigate();
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
    // 고유 아이디로 상세 페이지로 이동
    const handleItemId = (itemId) => {
        navigate(`/itemDetail/${itemId}`);
    };
    // 해당 아이템 위시리스트에 추가
    const handleLikeToggle = () => {
        alert(1111);
    };

    return (
        <CardContainer key={item._id}>
            <CardImgContainer>
                <CardImgWrapper currentIndex={currentIndex}>
                    {
                        item.imageList.map((image, index) => (
                            <Img
                                key={index}
                                src={image.fileUrl}
                                alt={image.fileName}
                                onClick={() => handleItemId(item._id)}
                            ></Img>
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
                <TextCardName>{item.itemName}</TextCardName>
                <TextCardAddress>{item.locate}</TextCardAddress>
            </CardInfoContainer>
            <LikeWrapper isOn={isLogin}>
                <LikeBtn
                    onClick={handleLikeToggle}
                ></LikeBtn>
            </LikeWrapper>
        </CardContainer>
    )
}