import { useEffect, useRef } from "react";
import styled from "styled-components"
import ProfileIcon from "../../profile/Profile";
import { COLORS } from "../../../../commons/styles/COLORS";
import RectangleBtnWithLink01 from "../../button/RectangleBtnWithLink01";
import { useSelector } from "react-redux";
import RectangleBtn02 from "../../button/RectangleBtn02";
import store from "../../../../commons/store/store";
import { setUser } from "../../../../commons/store/userSlice";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 30rem;
    max-height: ${(props) => (props.isLoginModalOpen ? "50rem" : 0)};
    background-color: white;
    position: absolute;
    top: 95%;
    right: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 1rem;
    box-shadow: 0rem 0.4rem 1.2rem 0rem rgba(0, 0, 0, 0.35);
    overflow: hidden;
    opacity: ${(props) => (props.isLoginModalOpen ? 1 : 0)};
    padding: 0 1rem 2rem 1rem;
    transition: all 1.3s ease-in-out;
    z-index: 200;
`;
const ProfileWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
`;
const ProfileInfoWrapper = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ProfileInfo = styled.div`
    width: 80%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    gap: 0.5rem;
    box-sizing: border-box;
`;
const Title = styled.h1`
    font-size: 2rem;
    font-weight: bolder;
    margin: 0;
`;
const TextSpan = styled.span`
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0;
`;
const Layer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
const ProfileText = styled.span`
    font-size: 1.4rem;
    font-weight: normal;
    &:hover {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
    }
`;
const WishListWrapper = styled.div`
    width: 100%;
    height: 4rem;
`;
const LogBtnWrapper = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    algin-item: center;
    justify-content: space-between;
    box-sizing: border-box;
`;
const BtnsWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
`;

export default function LoginModal(props) {
    const userInfo = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const modalRef = useRef(null);

    const { isLoginModalOpen, handleModalClose } = props;
    useEffect(() => {
        let handleClickOutside;
        if (isLoginModalOpen) {
            handleClickOutside = (e) => {
                if (modalRef.current && !modalRef.current.contains(e.target)) {
                    handleModalClose();
                }
            };
            window.addEventListener("click", handleClickOutside);
        }
        return () => {
            window.removeEventListener("click", handleClickOutside);
        }
    }, [
        isLoginModalOpen
        , handleModalClose
        , modalRef
    ]);

    const handleLogoutClick = () => {
        store.dispatch(setUser(null));
        navigate('/');
    };
    const goToUsersProfile = () => {
        navigate('/users/profile');
    };
    const goToUsersItemList = () => {
        navigate('/users/itemList');
    };


    return (
        <Wrapper isLoginModalOpen={props.isLoginModalOpen} ref={modalRef}>
            {userInfo == null ?
                <>
                    <ProfileWrapper>
                        <ProfileInfoWrapper>
                            <ProfileIcon
                                isLoginModalOpen={props.isLoginModalOpen}
                                setIsLoginModalOpen={props.setIsLoginModalOpen}
                                cursorStyle="normal"
                            ></ProfileIcon>
                            <ProfileInfo>
                                <Title>Guest <TextSpan>님</TextSpan></Title>
                            </ProfileInfo>
                        </ProfileInfoWrapper>
                    </ProfileWrapper>
                    <LogBtnWrapper>
                        <BtnsWrapper>
                            <RectangleBtnWithLink01
                                backgroundColor={COLORS.loginColor}
                                content="Login"
                                path="/login"
                            ></RectangleBtnWithLink01>
                        </BtnsWrapper>
                        <BtnsWrapper>
                            <RectangleBtnWithLink01
                                backgroundColor={COLORS.middlegrayColor}
                                content="Sign Up"
                                path="/signUp"
                            ></RectangleBtnWithLink01>
                        </BtnsWrapper>
                    </LogBtnWrapper>
                </> :
                <>
                    <ProfileWrapper>
                        <ProfileInfoWrapper>
                            <ProfileIcon
                                isLoginModalOpen={props.isLoginModalOpen}
                                setIsLoginModalOpen={props.setIsLoginModalOpen}
                                cursorStyle="normal"
                            ></ProfileIcon>
                            <ProfileInfo>
                                <Title>{userInfo.userName} <TextSpan>님</TextSpan></Title>
                                <Layer>
                                    <ProfileText onClick={goToUsersProfile}>프로필 관리</ProfileText>
                                    <TextSpan>&nbsp;&nbsp;/&nbsp;&nbsp; </TextSpan>
                                    <ProfileText onClick={goToUsersItemList}>내 물건 관리</ProfileText>
                                </Layer>
                            </ProfileInfo>
                        </ProfileInfoWrapper>
                        <WishListWrapper>
                            <RectangleBtnWithLink01
                                backgroundColor={COLORS.likeColor}
                                content="WishList"
                                path="/users/wishList"
                            ></RectangleBtnWithLink01>
                        </WishListWrapper>
                    </ProfileWrapper>
                    <LogBtnWrapper>
                        <BtnsWrapper>
                            <RectangleBtn02
                                content="Logout"
                                backgroundColor={COLORS.loginColor}
                                handleLogoutClick={handleLogoutClick}
                            ></RectangleBtn02>
                        </BtnsWrapper>
                    </LogBtnWrapper>
                </>}
        </Wrapper >
    )
}