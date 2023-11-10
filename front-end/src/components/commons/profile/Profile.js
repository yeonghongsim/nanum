import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";

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
    const handleClick = (e) => {
        e.stopPropagation();
        props.setIsLoginModalOpen(!props.isLoginModalOpen);
    };

    return (
        <ProfileIconWrapper onClick={handleClick} style={{ cursor: props.cursorStyle }}>
            <Icon src="/icons/icon_profile.svg"></Icon>
        </ProfileIconWrapper>
    )
    // const handleClick = () => {
    //     props.setIsLoginModalOpen(!props.isLoginModalOpen);
    // };

    // return (
    //     <ProfileIconWrapper onClick={handleClick} style={{ cursor: props.cursorStyle }}>
    //         <Icon src="/icons/icon_profile.svg"></Icon>
    //     </ProfileIconWrapper>
    // )
}