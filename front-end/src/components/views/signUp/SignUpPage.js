import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import Logo from "../../commons/logo/LOGO";
import InputWithLabel01 from "../../commons/input/InputWithLabel01";
import CheckBtnWithLabel01 from "../../commons/button/CheckBtnWithLabel01";
import { useEffect, useRef, useState } from "react";
import SelectBoxWithLabel01 from "../../commons/select/SelectBoxWithLabel01";

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
    background-color: ${props => props.isOn ? COLORS.linkColor : COLORS.middlegrayColor};
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.8s;
`;
const Text = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
`;

export default function SignUpPage() {

    let [isOnCheck, setIsOnCheck] = useState(false);
    let [isIdConfirmed, setIsIdConfirmed] = useState(false);
    let [isConfirmedUserPw, setIsConfirmedUserPw] = useState(false);
    let [isConfirmedUserName, setIsConfirmedUserName] = useState(false);
    let [isConfirmedBirthday, setIsConfirmedBirthday] = useState(false);
    let [isConfirmedPhoneNumber, setIsConfirmedPhoneNumber] = useState(false);
    let [isOnSignUpBtn, setIsOnSignUpBtn] = useState(false);
    // let [prepareData, setPrepareData] = useState({});
    let [brandNumber, setBrandNumber] = useState('010');

    const handleOnCheckBtn = (isValid) => {
        setIsOnCheck(isValid);
    };
    const handleIdConfirmed = (confirm) => {
        setIsIdConfirmed(confirm);
    };
    const handlePwConfirmed = (confirm) => {
        setIsConfirmedUserPw(confirm)
    };
    const handleNameConfirmed = (confirm) => {
        setIsConfirmedUserName(confirm)
    };
    const handleBirthdayConfirmed = (confirm) => {
        setIsConfirmedBirthday(confirm);
    };
    const handlePhoneNumberConfirmed = (confirm) => {
        setIsConfirmedPhoneNumber(confirm);
    };
    const handleSignUpBtnToggle = (toggle) => {
        setIsOnSignUpBtn(toggle);
    };

    useEffect(() => {
        if (isIdConfirmed && isConfirmedUserPw && isConfirmedUserName
            && isConfirmedBirthday && isConfirmedPhoneNumber) {
            handleSignUpBtnToggle(true);
        } else {
            handleSignUpBtnToggle(false);
        }
    }, [
        isIdConfirmed
        , isConfirmedUserPw
        , isConfirmedUserName
        , isConfirmedBirthday
        , isConfirmedPhoneNumber]);

    // console.log(isOnSignUpBtn)
    const handleSetData = (e) => {
        if (isOnSignUpBtn) {
            const userId = document.getElementById('userId').value;
            const userPassword = document.getElementById('userPw').value;
            const userName = document.getElementById('userName').value;
            const imsiBirthday = document.getElementById('birthday').value;
            const birthday = `${imsiBirthday.slice(0, 4) + '.' + imsiBirthday.slice(4, 6) + '.' + imsiBirthday.slice(6)}`
            const imsiPhoneNumber = document.getElementById('phoneNumber').value;
            const phoneNumber = brandNumber + '-' + imsiPhoneNumber.slice(0, 4) + '-' + imsiPhoneNumber.slice(4);
            const data = {
                userId: userId,
                userPassword: userPassword,
                userName: userName,
                birthday: birthday,
                phoneNumber: phoneNumber,
                profileImgURL: null,
                profileImgName: null,
                itemIdList: [],
            };
            // setPrepareData(data);
            handleSignUp(data);
        }
    };

    const brandNumberRef = useRef(null);
    const handleOptionClick = (option) => {
        setBrandNumber(option.value);
    };

    const handleSignUp = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/signUp', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            // 서버 응답 후 필요한 로직
            if (response.ok) {
                console.log('success');
                // 등록 후 화면 이동
                window.location.href = '/login';
            }
            else { console.log('fail') }
        } catch (error) { console.log('통신 오류: ', error) }
    };


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
                                handlePwConfirmed={handlePwConfirmed}
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
                                    handleNameConfirmed={handleNameConfirmed}
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
                                    handleBirthdayConfirmed={handleBirthdayConfirmed}
                                ></InputWithLabel01>
                            </Inputs>
                        </BirthInputWrapper>
                    </Layer>
                    <Layer>
                        <SelectPhoneNumberWrapper>
                            <SelectBoxWithLabel01
                                name="brandNumber"
                                label="PhoneNumber"
                                defaultValue={
                                    { label: "010", value: "010" }
                                }
                                options={[
                                    { label: "010", value: "010" },
                                    { label: "011", value: "011" }
                                ]}
                                brandNumberRef={brandNumberRef}
                                handleOptionClick={handleOptionClick}
                            ></SelectBoxWithLabel01>
                        </SelectPhoneNumberWrapper>
                        <InputPhoneNumberWrapper>
                            <InputWithLabel01
                                name="phoneNumber"
                                label="&nbsp;"
                                inputType="text"
                                placeHolder="' - ' 없이 숫자 8자리"
                                handlePhoneNumberConfirmed={handlePhoneNumberConfirmed}
                            ></InputWithLabel01>
                        </InputPhoneNumberWrapper>
                    </Layer>
                    <Layer>
                        <BtnWrapper>
                            <SignUpBtn
                                isOn={isOnSignUpBtn}
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

