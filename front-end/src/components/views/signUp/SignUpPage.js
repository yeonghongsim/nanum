import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import Logo from "../../commons/logo/LOGO";
import InputWithLabel01 from "../../commons/input/InputWithLabel01";
import CheckBtnWithLabel01 from "../../commons/button/CheckBtnWithLabel01";
import { useRef, useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.whiteColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 50rem;
    background-color: ${COLORS.whiteColor};
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
    gap: 1rem;
    @media screen and (max-width: 1024px) {
        width: 35rem;
    }
`;
const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
`;
const Layer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
const CheckInputWrapper = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-right: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 70%;
    }
`;
const CheckBtnWrapper = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 30%;
    }
`;
const NameInputWrapper = styled.div`
    width: 60%;
    height: 100%;
    padding-right: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
`;
const BirthInputWrapper = styled.div`
    width: 40%;
    height: 100%;
    padding-left: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
`;
const SelectPhoneNumberWrapper = styled.div`
    width: 20%;
    height: 100%;
    padding-right: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 30%;
    }
`;
const InputPhoneNumberWrapper = styled.div`
    width: 80%;
    height: 100%;
    padding-left: 0.5rem;
    @media screen and (max-width: 1024px) {
        width: 70%;
    }
`;
const Inputs = styled.div`
    width: 100%;
    height: 100%;
`;
const BtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SignUpBtn = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: ${COLORS.middlegrayColor};
    border-radius: 1rem;
    cursor: pointer;
`;
const Text = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
`;

export default function SignUpPage() {
    const userIdRef = useRef(null);

    let [isOnCheck, setIsOnCheck] = useState(false);
    let [isIdConfirmed, setIsIdConfirmed] = useState(false);
    let [isOnSignUpBtn, setIsOnSignUpBtn] = useState(true);
    let [prepareData, setPrepareData] = useState({});

    const handleOnCheckBtn = (isValid) => {
        setIsOnCheck(isValid);
    };
    const handleIdConfirmed = (confirm) => {
        setIsIdConfirmed(confirm);
    };
    const handleSetData = () => {
        // const userId = userIdRef.current.value;
        // console.log(userId)
        // const userId = document.getElementById('userId').value;
        // const userPw = document.getElementById('userPw').value;
        // const userName = document.getElementById('userName').value;
        // const imsiBirthday = document.getElementById('birthday').value;
        // const birthday = `${imsiBirthday.slice(0, 4)}/${imsiBirthday.slice(4, 6)}/${imsiBirthday.slice(6)}`;
        // const brandNumber = document.getElementById('brandNumber').value;
        // const imsiPhoneNumber = document.getElementById('phoneNumber').value;
        // const phoneNumber = `${brandNumber}-${imsiPhoneNumber.slice(0, 4)}-${imsiPhoneNumber.slice(4)}`
        // const data = {
        //     userId: userId,
        //     userPw: userPw,
        //     userName: userName,
        //     birthday: birthday,
        //     phoneNumber: phoneNumber
        // };
        // setPrepareData(data);
    };
    // console.log(prepareData)

    return (
        <Wrapper>
            <Container>
                <Logo></Logo>
                <Form>
                    <Layer>
                        <CheckInputWrapper>
                            <Inputs>
                                <InputWithLabel01
                                    name="userId"
                                    label="ID"
                                    inputType="text"
                                    placeHolder="아이디를 입력하세요."
                                    handleOnCheckBtn={handleOnCheckBtn}
                                    handleIdConfirmed={handleIdConfirmed}
                                    userIdRef={userIdRef}
                                ></InputWithLabel01>
                            </Inputs>
                        </CheckInputWrapper>
                        <CheckBtnWrapper>
                            <BtnWrapper>
                                <CheckBtnWithLabel01
                                    label="&nbsp;"
                                    backgroundColor={COLORS.middlegrayColor}
                                    content="Check"
                                    id="checkId"
                                    isOn={isOnCheck}
                                    isIdConfirmed={isIdConfirmed}
                                    handleIdConfirmed={handleIdConfirmed}
                                    handleSetData={handleSetData}
                                ></CheckBtnWithLabel01>
                            </BtnWrapper>
                        </CheckBtnWrapper>
                    </Layer>
                    <Layer>
                        <Inputs>
                            <InputWithLabel01
                                name="userPw"
                                label="Password"
                                inputType="password"
                                placeHolder="비밀번호를 입력하세요."
                            ></InputWithLabel01>
                        </Inputs>
                    </Layer>
                    <Layer>
                        <Inputs>
                            <InputWithLabel01
                                name="pwCheck"
                                label="Password Check"
                                inputType="password"
                                placeHolder="동일한 비밀번호를 입력하세요."
                            ></InputWithLabel01>
                        </Inputs>
                    </Layer>
                    <Layer>
                        <NameInputWrapper>
                            <Inputs>
                                <InputWithLabel01
                                    name="userName"
                                    label="Name"
                                    inputType="text"
                                    placeHolder="이름을 입력하세요."
                                ></InputWithLabel01>
                            </Inputs>
                        </NameInputWrapper>
                        <BirthInputWrapper>
                            <Inputs>
                                <InputWithLabel01
                                    name="birthday"
                                    label="Birthday"
                                    inputType="text"
                                    placeHolder="생년월일 8자리"
                                ></InputWithLabel01>
                            </Inputs>
                        </BirthInputWrapper>
                    </Layer>
                    <Layer>
                        <SelectPhoneNumberWrapper>
                            <InputWithLabel01
                                name="brandNumber"
                                label="PhoneNumber"
                                inputType="text"
                                placeHolder="통신사 번호"
                            ></InputWithLabel01>
                        </SelectPhoneNumberWrapper>
                        <InputPhoneNumberWrapper>
                            <InputWithLabel01
                                name="phoneNumber"
                                label="&nbsp;"
                                inputType="text"
                                placeHolder="' - ' 없이 숫자 8자리"
                            ></InputWithLabel01>
                        </InputPhoneNumberWrapper>
                    </Layer>
                    <Layer>
                        <BtnWrapper>
                            <SignUpBtn
                                onClick={handleSetData}
                            >
                                <Text>Sign Up</Text>
                            </SignUpBtn>
                        </BtnWrapper>
                    </Layer>
                </Form>
            </Container>
        </Wrapper>
    )
}