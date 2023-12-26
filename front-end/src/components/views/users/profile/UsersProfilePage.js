import styled from "styled-components"
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { COLORS } from "../../../../commons/styles/COLORS";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";

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
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`;
const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
const ProfileImgNInfoContainer = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    gap: 2rem;
`;
const ProfileImgContainer = styled.div`
    width: 15rem;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.lightgrayColor};
    overflow: hidden;
`;
const ProfileImg = styled.img`
    width: ${(props) => (props.noneProfileImg ? '60%' : '100%')};
    height: ${(props) => (props.noneProfileImg ? '60%' : '100%')};
    flex-shrink: 0;
`;
const ProfileInfoContainer = styled.div`
    width: calc(100% - 15rem);
    height: 100%;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    gap: 2rem;
    box-sizing: border-box;
`;
const Layer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
`;
const BtnContainer = styled.div`
    // width: 100%;
    // height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 3rem;
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
const TextP = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
`;

export default function UsersProfilePage() {
    const userInfo = useSelector((state) => state.user.user);
    // console.log(userInfo);
    // 기본 이미지 확인
    let noneProfileImg;
    if (userInfo.profileImgURL === null) {
        noneProfileImg = true;
    } else {
        noneProfileImg = false;
    }
    const navigate = useNavigate();
    const handleGoToWishList = () => {
        navigate('/users/wishList')
    };
    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <ContentHead>
                    <UpsideText onClick={handleGoToWishList}>위시리스트 보러가기</UpsideText>
                </ContentHead>
                <ContentBody>
                    <ProfileContainer>
                        <ProfileImgNInfoContainer>
                            <ProfileImgContainer>
                                {
                                    userInfo.profileImgURL === null ?
                                        <ProfileImg
                                            src="/icons/icon_profile.svg"
                                            noneProfileImg={noneProfileImg}
                                        ></ProfileImg>
                                        : <ProfileImg
                                            src={userInfo.profileImgURL}
                                            alt={userInfo.profileImgName}
                                            noneProfileImg={noneProfileImg}
                                        ></ProfileImg>
                                }
                            </ProfileImgContainer>
                            <ProfileInfoContainer>
                                <TextP>이름 : {userInfo.userName}</TextP>
                                <TextP>생일 : {userInfo.birthday}</TextP>
                                <TextP>연락처 : {userInfo.phoneNumber}</TextP>
                            </ProfileInfoContainer>
                        </ProfileImgNInfoContainer>
                    </ProfileContainer>
                </ContentBody>
                <Layer>
                    <BtnContainer>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/"
                                content="홈으로"
                                backgroundColor={COLORS.primaryColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </BtnContainer>
                    <BtnContainer>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/users/profileUpdate"
                                content="정보 수정"
                                backgroundColor={COLORS.linkColor}
                                userInfo={userInfo}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </BtnContainer>
                </Layer>
            </Content>
        </Wrapper>
    )
}