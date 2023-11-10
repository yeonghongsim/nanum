import styled from "styled-components"
import OnClickPageMove from "../hooks/OnClickPageMove";

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

export default function RectangleBtnWithLink01(props) {

    return (
        <RectangleBtnWrapper onClick={OnClickPageMove(props.path)}>
            <RectangleBtn backgroundColor={props.backgroundColor}>
                <Text>{props.content}</Text>
            </RectangleBtn>
        </RectangleBtnWrapper>
    )
}