import styled from "styled-components";

const RectangleBtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    box-sizing: border-box;
`;
const Label = styled.label`
    font-size: 1.6rem;
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
    cursor: pointer;
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
`;

export default function RectangleBtnWithLabel01(props) {
    return (
        <RectangleBtnWrapper>
            <Label>{props.label}</Label>
            <RectangleBtn backgroundColor={props.backgroundColor}>
                <Text>{props.content}</Text>
            </RectangleBtn>
        </RectangleBtnWrapper>
    )
}