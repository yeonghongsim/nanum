import styled from "styled-components"
import HomePageItemListCard from "./HomePageItemListCard";
import { useSelector } from "react-redux";

const ItemListContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem
`;

export default function HomePageItemListCardContainer({ itemList, ...props }) {
    // 사용자 정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // console.log(userInfo);
    let isLogin;
    if (userInfo === null) {
        isLogin = false;
    } else {
        isLogin = true;
    }
    console.log(isLogin);
    // console.log(itemList);
    return (
        <ItemListContainer>
            {
                itemList.map((item) => (
                    <HomePageItemListCard
                        item={item}
                        isLogin={isLogin}
                    ></HomePageItemListCard>
                ))
            }
        </ItemListContainer>
    )
}