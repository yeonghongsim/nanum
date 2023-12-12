import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-contet: flex-start;
    gap: 1rem;
`;
const Label = styled.label`
    font-size: 1.8rem;
    font-weight: bold;
`;
const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid ${COLORS.middlegrayColor};
    border-radius: 0.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
`;
const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: none;
    outline: none;
    font-size: 1.6rem;
    font-weight: normal;
    padding-left: 1rem;
    color: rgba(0, 0, 0, 0.7);
    &::placeholder {
        color: ${COLORS.middlegrayColor};
    }
`;

export default function InputWithLabel03Ref({ forwardedRef, ...props }) {
    return (
        <Wrapper>
            <Label htmlFor={props.id}>{props.label}</Label>
            <InputWrapper>
                <Input
                    id={props.id}
                    ref={forwardedRef}
                    type={props.inputType}
                    placeholder={props.placeHolder}
                ></Input>
            </InputWrapper>
        </Wrapper>
    )
}