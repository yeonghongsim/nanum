import styled from "styled-components";
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import UsersItemListCardContainer from "../../../commons/cards/UsersItemListCardContainer.container";
import Spinner from "../../../commons/hooks/Spinner";

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
    box-sizing: border-box;
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
const Layer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    box-sizing: border-box;
`;

export default function UsersItemListPage() {
    // 사용자 정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // 데이터 로딩 상태 추가
    const [loading, setLoading] = useState(true);
    // 사용자 등록 물건 목록 조회 통
    const [userItems, setUserItems] = useState([]);
    // useEffect 의존성 추가하여, 회원 정보 조회
    useEffect(() => {
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
            } finally {
                setLoading(false);
            }
        };
        // fetchUserItems를 의존성 배열에 추가
        fetchUserItems();
    }, [userInfo._id]);

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
                {loading ?
                    <Layer>
                        <Spinner loading={loading} />
                    </Layer> :
                    <CardListContainer>
                        {
                            userItems.map((item) =>
                                <UsersItemListCardContainer item={item} key={item.id}></UsersItemListCardContainer>
                            )
                        }
                    </CardListContainer>
                }
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