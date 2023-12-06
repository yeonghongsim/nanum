import styled from "styled-components";
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    min-height: 89%;
    margin: auto;
    padding: 1rem;
    box-sizing: border-box;
    border: 0.1px solid black;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const ContentHead = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const ContentBody = styled.div`
    width: 100%;
    border: 1px solid black;
`;
const UpsideText = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
    &:hover {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }
`;
export default function UsersWishListPage() {
    const navigate = useNavigate();
    const handleGoToProfile = () => {
        navigate('/users/profile')
    };
    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <ContentHead>
                    <UpsideText onClick={handleGoToProfile}>프로필 보러가기</UpsideText>
                </ContentHead>
                <ContentBody>
                    2
                </ContentBody>
            </Content>
        </Wrapper>
    )
}