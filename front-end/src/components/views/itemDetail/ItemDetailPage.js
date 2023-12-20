import styled from "styled-components";
import LayoutHeader from '../../commons/layout/header/LayoutHeader';
import LayoutFooter from '../../commons/layout/footer/LayoutFooter';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../commons/hooks/Spinner";
import { COLORS } from "../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    min-height: 58.6rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 100%;
    }
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 40rem;
    // border: 1px solid black;
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    @media screen and (max-width: 1024px) {
        height: 35rem;
    }
    @media screen and (max-width: 512px) {
        flex-direction: column;
    }
`;
const ImageLeftContainer = styled.div`
    width: 50%;
    height: 100%;
    // border: 1px solid black;
    border-radius: 0.5rem;
`;
const ImageRightContainer = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    box-sizing: border-box;
    @media screen and (max-width: 512px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;
const ImageRightSmallContainer = styled.div`
    width: calc(50% - 0.5rem);
    height: calc(50% - 0.5rem);
    // border: 1px solid black;
    border-radius: 0.5rem;
    box-sizing: border-box;
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
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
const MoreImageBtnDiv = styled.div`
    width: 12rem;
    height: 4rem;
    background-color: white;
    border-radius: 0.5rem;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        width: 10rem;
        height: 3.3rem;
    }
`;
const MoreText = styled.p`
    font-size: 1.8rem;
    font-weight: normal;
    @media screen and (max-width: 1024px) {
        font-size: 1.6rem;
    }
`;
const InfoContainer = styled.div`
    width: 100%;
    height: 25rem;
    // border: 1px solid black;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        height: 21.875rem;
    }
`;
const ContactInfoContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 30%;
        flex-direction: row;
        justify-content: flex-start;
    }
`;
const ItemInfoContainer = styled.div`
    width: 80%;
    height: 100%;
    // border: 1px solid black;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 70%;
    }
`;
const SimpleInfoDiv = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.1);
    background-color: ${COLORS.primaryColor};
    color: white;
    font-size: 2rem;
    font-weight: bolder;
    @media screen and (max-width: 1024px) {
        width: auto;
        padding: 0 2rem 0 2rem;
        font-size: 1.6rem;
    }
`;
const DetailInfoDiv = styled.div`
    width: 100%;
    height: auto;
    padding: 0.5rem;
    // border: 1px solid black;
    border-radius: 0.5rem;
    box-sizing: border-box;
    font-size: 2rem;
    font-weight: normal;
    @media screen and (max-width: 1024px) {
        font-size: 1.6rem;
    }
`;

export default function ItemDetailPage() {
    // 회원정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // url에 param 데이터 확인
    const { itemId } = useParams();
    // 데이터 로딩 상태 추가
    const [loading, setLoading] = useState(true);
    // 사용자 등록 물건 목록 조회 통
    const [item, setItem] = useState({});

    // useEffect 의존성 추가하여, 물건 정보 조회
    useEffect(() => {
        // 사용자 id 통해 사용자 등록 물건 조회
        const fetchItemDetail = async () => {
            try {
                const fullURL = `http://localhost:8080/itemDetail/${itemId}`;
                const response = await axios.get(fullURL);
                const result = response.data.result;
                // console.log(result);
                setItem(result);
            } catch (error) {
                console.error('Error getting itemType data:', error);
                throw error;
            } finally {
                setLoading(false);
            }
        };
        // fetchUserItems를 의존성 배열에 추가
        fetchItemDetail();
    }, [itemId]);

    return (
        <Wrapper>
            <LayoutHeader></LayoutHeader>
            <Content>
                {
                    loading ?
                        <Spinner></Spinner> :
                        <>
                            <ImageContainer>
                                <ImageLeftContainer>
                                    <ImageWrapper>
                                        <Image
                                            // src={item.imageList[0].fileURL}
                                            // alt={item.imageList[0].fileName}
                                            src="/images/house2.jpeg"
                                        ></Image>
                                    </ImageWrapper>
                                </ImageLeftContainer>
                                <ImageRightContainer>
                                    <ImageRightSmallContainer>
                                        <ImageWrapper>
                                            <Image src="/images/house2.jpeg"></Image>
                                        </ImageWrapper>
                                    </ImageRightSmallContainer>
                                    <ImageRightSmallContainer>
                                        <ImageWrapper>
                                            <Image src="/images/house3.jpeg"></Image>
                                        </ImageWrapper>
                                    </ImageRightSmallContainer>
                                    <ImageRightSmallContainer>
                                        <ImageWrapper>
                                            <Image src="/images/house4.jpeg"></Image>
                                        </ImageWrapper>
                                    </ImageRightSmallContainer>
                                    <ImageRightSmallContainer>
                                        <ImageWrapper>
                                            <Image src="/images/house5.jpeg"></Image>
                                        </ImageWrapper>
                                    </ImageRightSmallContainer>
                                </ImageRightContainer>
                                {
                                    item.imageList.length > 5 ?
                                        <MoreImageBtnDiv>
                                            <MoreText>더보기</MoreText>
                                        </MoreImageBtnDiv> : null
                                }
                            </ImageContainer>
                            <InfoContainer>
                                <ContactInfoContainer>
                                    <SimpleInfoDiv>
                                        {item.itemName}
                                    </SimpleInfoDiv>
                                    <SimpleInfoDiv>
                                        {item.title}
                                    </SimpleInfoDiv>
                                    {
                                        userInfo == null ?
                                            null :
                                            <>
                                                <SimpleInfoDiv>
                                                    {item.phoneNumber}
                                                </SimpleInfoDiv>
                                            </>
                                    }
                                </ContactInfoContainer>
                                <ItemInfoContainer>
                                    <DetailInfoDiv>
                                        장소 : {item.locate}
                                    </DetailInfoDiv>
                                    <DetailInfoDiv>
                                        {item.content}
                                    </DetailInfoDiv>
                                </ItemInfoContainer>
                            </InfoContainer>
                        </>
                }
            </Content>
            <LayoutFooter></LayoutFooter>
        </Wrapper>
    )
}