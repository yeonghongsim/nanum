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

    if (props.phoneNumber === 'phoneNumber') {
        const brandNumber = props.placeHolder.split('-')[0];
        const phoneNumber = props.placeHolder.split('-')[1] + props.placeHolder.split('-')[2];
        console.log(brandNumber);
        console.log(phoneNumber);
    }

    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <InputWrapper>
                <Input placeHolder={props.placeHolder}></Input>
            </InputWrapper>
        </Wrapper>
    )
}