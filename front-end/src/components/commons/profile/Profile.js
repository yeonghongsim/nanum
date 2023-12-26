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
    background-color: ${COLORS.lightgrayColor};
    overflow: hidden;
`;
const Icon = styled.img`
    // width: 60%;
    // height: 60%;
    width: ${(props) => (props.noneProfileImg ? '60%' : '100%')};
    height: ${(props) => (props.noneProfileImg ? '60%' : '100%')};
`;

export default function ProfileIcon(props) {
    // 회원정보 조회
    const userInfo = useSelector((state) => state.user.user);
    let noneProfileImg;
    if (userInfo === null
        || userInfo?.profileImgName === null) {
        noneProfileImg = true;
    } else {
        noneProfileImg = false;
    }
    const handleClick = (e) => {
        e.stopPropagation();
        props.setIsLoginModalOpen(!props.isLoginModalOpen);
    };

    return (
        <ProfileIconWrapper onClick={handleClick} style={{ cursor: props.cursorStyle }}>
            {
                userInfo === null || userInfo?.profileImgURL === null ?
                    <Icon
                        src="/icons/icon_profile.svg"
                        noneProfileImg={noneProfileImg}
                    ></Icon> :
                    <Icon
                        src={userInfo?.profileImgURL}
                        alt={userInfo?.profileImgName}
                        noneProfileImg={noneProfileImg}
                    ></Icon>
            }
        </ProfileIconWrapper>
    )
}