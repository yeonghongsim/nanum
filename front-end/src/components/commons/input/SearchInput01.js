import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const InputContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 1rem;
`;
const InputWrapper = styled.div`
    width: 90%;
    height: 100%;
    border: 1px solid ${COLORS.linkColor};
    border-radius: 1rem 0 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 1024px) {
        width: 85%;
    }
`;
const Input = styled.input`
    width: 95%;
    height: 95%;
    border: none;
    outline: none;
    margin-left: 1rem;
    border-radius: 1rem 0 0 1rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${COLORS.middlegrayColor};
    :focus {
        border: none;
        outline: none;
    }
`;
const IconWrapper = styled.div`
    width: 10%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLORS.linkColor};
    background-color: ${COLORS.linkColor};
    cursor: pointer;
    @media screen and (max-width: 1024px) {
        width: 15%;
    }
`;
const Icon = styled.img`
    width: 50%;
    height: 50%;
`;

export default function SearchInput01() {
    return (
        <InputContainer>
            <InputWrapper>
                <Input
                    type="text"
                    name="search"
                    id="search"
                ></Input>
            </InputWrapper>
            <IconWrapper>
                <Icon src="/icons/icon_searchW.svg"></Icon>
            </IconWrapper>
        </InputContainer>
    )
}