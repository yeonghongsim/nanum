import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
`;
const Label = styled.label`
    font-size: 1.8rem;
    font-weight: normal;
`;
const InputWrapper = styled.div`
    width: 100%;
    height: 5rem;
    border: 1px solid ${COLORS.lightgrayColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 0.5rem;
`;
const Input = styled.input`
    width: 100%;
    height: 95%;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    padding-left: 1rem;
    color: ${COLORS.middlegrayColor};
    font-size: 1.6rem;
    :focus {
        border: none;
        outline: none;
    }
`;
const ErrDiv = styled.div`
    width: 100%;
    // padding: 0.5rem 0 0 0;
    // border: 1px solid black;
`;
const ErrMsg = styled.p`
    font-size: 1.2rem;
    font-weight: normal;
    color: red;
    margin: 0;
    &::before {
        content: '*';
        font-size: 1.4rem;
    }
`;
export default function InputWithLabel02Ref({ label
    , id
    , inputType
    , placeHolder
    , forwardedRef
    , isOnErr
    , errMsg }) {

    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
            <InputWrapper>
                <Input
                    id={id}
                    type={inputType}
                    placeholder={placeHolder}
                    ref={forwardedRef}
                    isOnErr={isOnErr}
                ></Input>
            </InputWrapper>
            {
                isOnErr && <ErrDiv>
                    <ErrMsg>{errMsg}</ErrMsg>
                </ErrDiv>
            }
        </InputContainer>
    )
}