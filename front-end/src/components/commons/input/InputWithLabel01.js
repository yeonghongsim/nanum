import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const InputContainer = styled.div`
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
    margin: 0;
`;
const InputWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: 0.1rem solid ${COLORS.lightgrayColor};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
`;
const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding-left: 1rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 1.5rem;
    color: ${COLORS.middlegrayColor};
    :focus {
        border: none;
        outline: none;
    }
`;

export default function InputWithLabel01(props) {
    return (
        <InputContainer>
            <Label
                htmlFor={props.name}
            >{props.label}</Label>
            <InputWrapper>
                <Input
                    type={props.inputType}
                    name={props.name}
                    id={props.name}
                    placeholder={props.placeHolder}

                ></Input>
            </InputWrapper>
        </InputContainer>
    )
}