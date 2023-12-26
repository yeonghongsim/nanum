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
    border: ${(props) => (props.isErr ?
        `1.5px solid red` :
        `1px solid ${COLORS.middlegrayColor}`)};
    border-radius: 0.5rem;
    position: relative;
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
// const ErrDiv = styled.div`
//     width: 100%;
//     border: 1px solid black;
// `;
// const ErrMsg = styled.p`
//     font-size: 1.2rem;
//     font-weight: normal;
//     color: red;
//     margin: 0;
//     position: absolute;
//     bottom: -1.5rem;
//     right: 0;
// `;

export default function InputWithLabel02({ forwardedRef, ...props }) {
    let modifiedPlaceholder = props.placeHolder;

    if (props.phoneNumber === 'phoneNumber') {
        const phoneNumber = props.placeHolder.split('-')[1] + props.placeHolder.split('-')[2];
        modifiedPlaceholder = phoneNumber;
    }
    // console.log(props.isErr);
    // console.log(props.errMsg);

    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <InputWrapper
                isErr={props.isErr}>
                <Input
                    type={props.inputType}
                    placeholder={modifiedPlaceholder}
                    ref={forwardedRef}
                ></Input>
            </InputWrapper>
        </Wrapper>
    )
}