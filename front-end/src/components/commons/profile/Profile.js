import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";
import { useSelector } from "react-redux";

const ProfileIconWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.darkgaryColor};
`;
const Icon = styled.img`
    width: 60%;
    height: 60%;
`;

export default function ProfileIcon(props) {
    // 회원정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // console.log(userInfo);

    const handleClick = (e) => {
        e.stopPropagation();
        props.setIsLoginModalOpen(!props.isLoginModalOpen);
    };

    return (
        <ProfileIconWrapper onClick={handleClick} style={{ cursor: props.cursorStyle }}>
            {
                userInfo === null || userInfo?.profileImgURL === null ?
                    <Icon src="/icons/icon_profile.svg"></Icon> :
                    <Icon
                        src={userInfo?.profileImgURL}
                        alt={userInfo?.profileImgName}
                    ></Icon>
            }
        </ProfileIconWrapper>
    )
}