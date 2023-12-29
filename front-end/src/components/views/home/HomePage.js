import LayoutHeader from '../../commons/layout/header/LayoutHeader';
import LayoutCategoryNav from '../../commons/layout/categoryNav/LayoutCategoryNav';
import LayoutFooter from '../../commons/layout/footer/LayoutFooter';
import styled from 'styled-components';
import HomePageItemListCardContainer from '../../commons/cards/HomePageItemListCardContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../commons/hooks/Spinner';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    min-height: 56.6rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
    }
`;
const LoadinContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 3rem;
`;

export default function HomePage() {
    // 목록 조회 전까지의 로딩
    const [isLoading, setIsLoading] = useState(true);
    // 등록된 모든 아이템 중 나눔이 완료되지 않은 아이템 목록 조회
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        // 사용자 id 통해 사용자 등록 물건 조회
        const fetchItems = async () => {
            try {
                const fullURL = `http://localhost:8080/home/itemList`;
                const response = await axios.get(fullURL);
                // const itemList = await response.data;
                setItemList(await response.data);
                setIsLoading(false);
                // console.log(itemList);
            } catch (error) {
                console.error('Error getting itemType data:', error);
                throw error;
            }
        };
        // fetchUserItems를 의존성 배열에 추가
        fetchItems();
    }, []);

    return (
        <Wrapper>
            <LayoutHeader></LayoutHeader>
            <LayoutCategoryNav></LayoutCategoryNav>
            <Content>
                {
                    isLoading
                        ? <LoadinContainer>
                            <Spinner></Spinner>
                        </LoadinContainer>
                        : <HomePageItemListCardContainer itemList={itemList}></HomePageItemListCardContainer>
                }
            </Content>
            <LayoutFooter></LayoutFooter>
        </Wrapper>
    )
}