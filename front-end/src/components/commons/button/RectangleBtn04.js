import styled from "styled-components";

const RectangleBtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`;
const RectangleBtn = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: ${(props) => (props.backgroundColor)};
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
`;

export default function RectangleBtn04({ handleProfileUpdate, handleOpenModal, ...props }) {
    return (
        <RectangleBtnWrapper onClick={handleOpenModal}>
            <RectangleBtn backgroundColor={props.backgroundColor}>
                <Text>{props.content}</Text>
            </RectangleBtn>
        </RectangleBtnWrapper>
    )
}