import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";

const RectangleBtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    box-sizing: border-box;
`;
const Label = styled.label`
    font-size: 1.6rem;
`;
const RectangleBtn = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => (props.isOn ? COLORS.linkColor : COLORS.middlegrayColor)}
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
`;

export default function RectangleBtnWithLabel01(props) {
    return (
        <RectangleBtnWrapper>
            <Label>{props.label}</Label>
            <RectangleBtn>
                <Text>{props.content}</Text>
            </RectangleBtn>
        </RectangleBtnWrapper>
    )
}