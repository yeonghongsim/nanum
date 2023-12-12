import styled from "styled-components";
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    // margin-top: 1rem;
    box-sizing: border-box;
    gap: 1rem;
    // border: 1px solid black;
    padding: 1rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const AddItemBtnContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // padding-right: 1rem;
    box-sizing: border-box;
    // border: 1px solid black;
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 3rem;
`;
const CardListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
`;
const CardContainer = styled.div`
    width: 22.75rem;
    height: 25rem;
    // border: 1px solid black;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media screen and (max-width: 1024px) {
        width: 16.7rem;
        height: 18rem;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 30rem;
    }
`;
const CardImgContainer = styled.div`
    width: 100%;
    height: 70%;
    // border-bottom: 1px solid black;
    border-radius: 0.5rem 0.5rem 0 0;
    :hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1024px) {
        height: 60%;
    }
`;
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
`;
const CardInfoContainer = styled.div`
    width: 100%;
    height: 30%;
    // border: 1px solid black;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        height: 40%;
    }
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
const Layer = styled.div`
    width: 100%;
    display: flex;
    algin-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
`;
export default function UsersItemListPage() {
    // 사용자 정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // 사용자 등록 물건 목록 조회 통
    const [userItems, setUserItems] = useState([]);
    // 사용자 id 통해 사용자 등록 물건 조회
    const fetchUserItems = async () => {
        const userId = userInfo._id;
        try {
            const fullURL = `http://localhost:8080/users/itemList/${userId}`;
            const response = await axios.get(fullURL);
            const itemArray = response.data;
            setUserItems(itemArray);
        } catch (error) {
            console.error('Error getting itemType data:', error);
            throw error;
        }
    };
    // 자동 실행
    useEffect(() => {
        fetchUserItems();
    }, []);
    // 조회
    console.log(userItems);

    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <AddItemBtnContainer>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/users/registerItem"
                            content="나눔하기"
                            backgroundColor={COLORS.linkColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                </AddItemBtnContainer>
                <CardListContainer>
                    {
                        userItems.map((item, index) =>
                            <CardContainer key={index}>
                                <CardImgContainer>
                                    <CardImg src="/images/house1.jpeg"></CardImg>
                                </CardImgContainer>
                                <CardInfoContainer>
                                    <CardHead>{item.itemName}</CardHead>
                                    <CardContent>{item.itemTypeList}</CardContent>
                                </CardInfoContainer>
                            </CardContainer>
                        )
                    }
                </CardListContainer>
                <Layer>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/"
                            content="홈으로"
                            backgroundColor={COLORS.primaryColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                </Layer>
            </Content>
        </Wrapper>
    )
}