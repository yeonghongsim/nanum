import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import { useRef, useState } from "react";

const InputContainer = styled.div`
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
const ErrMsg = styled.p`
    font-size: 1.2rem;
    color: red;
    margin: 0;
`;

export default function InputWithLabel01(props) {
    const inputRef = useRef(null);

    const [errMsg, setErrMsg] = useState('');

    const handleErrMsg = (e) => {
        if (e.target.name === 'userId') {
            const inputValue = inputRef.current.value;

            // 영어와 숫자,한글x 의 혼합이며, 길이가 8 이상인지 확인
            const isValid = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*[ㄱ-ㅎㅏ-ㅣ가-힣])\S{8,}$/.test(inputValue);

            if (!isValid && inputValue.length > 0) {
                setErrMsg('* 영문,숫자 혼합 8자리 이상');
                props.handleOnCheckBtn(false);
                props.handleIdConfirmed(false);
            } else if (inputValue.length === 0) {
                setErrMsg('');
                props.handleOnCheckBtn(false);
                props.handleIdConfirmed(false);
            }
            else {
                setErrMsg('');
                props.handleOnCheckBtn(true);
                props.handleIdConfirmed(false);
            }
        }
        if (e.target.name === 'userPw') {
            const inputValue = e.target.value;
            // 특수기호,영문,숫자 혼합 10자리 이상인지 확인
            const isValid = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z])(?=.*\d).{10,}$/.test(inputValue);
            if (!isValid && inputValue.length > 0) {
                setErrMsg('* 특수기호,영문,숫자 혼합 10자리 이상');
            } else if (inputValue.length === 0) {
                setErrMsg('');
            } else {
                setErrMsg('');
            }
        }
        if (e.target.name === 'pwCheck') {
            const password = document.getElementById('userPw').value;
            const inputValue = e.target.value;
            if (inputValue.length > 0 && inputValue !== password) {
                setErrMsg('비밀번호가 일치하지 않습니다.')
                props.handlePwConfirmed(false);
            } else if (inputValue.length === 0) {
                setErrMsg('');
                props.handlePwConfirmed(false);
            } else {
                setErrMsg('')
                props.handlePwConfirmed(true);
            }
        }
        if (e.target.name === 'userName') {
            const inputValue = e.target.value;
            // 한글만 인지 확인
            const isValid = /^(?=.*[가-힣])(?!.*[ㄱ-ㅎㅏ-ㅣ])(?!.*[0-9])(?!.*[a-zA-Z])\S+$/.test(inputValue);
            if (!isValid && inputValue.length > 0) {
                setErrMsg('올바르지 않습니다.')
                props.handleNameConfirmed(false);
            } else if (inputValue.length === 0) {
                setErrMsg('')
                props.handleNameConfirmed(false);
            } else {
                setErrMsg('')
                props.handleNameConfirmed(true);
            }
        }
        if (e.target.name === 'birthday') {
            const inputValue = e.target.value;
            // 숫자인지 확인
            const onlyNumber = /^[0-9]+$/.test(inputValue);
            if (inputValue.length === 8 && onlyNumber) {
                setErrMsg('')
                props.handleBirthdayConfirmed(true);
            } else if (inputValue.length === 0) {
                setErrMsg('')
                props.handleBirthdayConfirmed(false);
            } else {
                setErrMsg('숫자로만 8자리')
                props.handleBirthdayConfirmed(false);
            }
        }
        if (e.target.name === 'phoneNumber') {
            const inputValue = e.target.value;
            const onlyNumber = /^[0-9]+$/.test(inputValue);
            if (inputValue.length === 8 && onlyNumber) {
                setErrMsg('')
                props.handlePhoneNumberConfirmed(true);
            } else if (inputValue.length === 0) {
                setErrMsg('')
                props.handlePhoneNumberConfirmed(false);
            } else {
                setErrMsg('숫자로만 8자리');
                props.handlePhoneNumberConfirmed(false);
            }
        }
    };

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
                    onChange={handleErrMsg}
                    ref={inputRef}
                ></Input>
            </InputWrapper>
            <ErrMsg>
                {errMsg}
            </ErrMsg>
        </InputContainer >
    )
}