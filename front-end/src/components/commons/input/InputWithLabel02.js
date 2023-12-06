import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
`;
const Label = styled.label`
    font-size: 1.4rem;
    font-weight: normal;
`;
const InputWrapper = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLORS.middlegrayColor};
    border-radius: 0.5rem;
`;
const Input = styled.input`
    width: 95%;
    height: 95%;
    border: none;
    outline: none;
    font-size: 1.6rem;
    font-weight: normal;
    color: ${COLORS.middlegrayColor};
`;

export default function InputWithLabel02(props) {
    let modifiedPlaceholder = props.placeHolder;

    if (props.phoneNumber === 'phoneNumber') {
        const phoneNumber = props.placeHolder.split('-')[1] + props.placeHolder.split('-')[2];
        modifiedPlaceholder = phoneNumber;
    }

    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <InputWrapper>
                <Input
                    type={props.inputType}
                    placeholder={modifiedPlaceholder}
                ></Input>
            </InputWrapper>
        </Wrapper>
    )
}