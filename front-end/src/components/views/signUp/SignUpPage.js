import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import Logo from "../../commons/logo/LOGO";
import InputWithLabel01 from "../../commons/input/InputWithLabel01";
import RectangleBtnWithLabel01 from "../../commons/button/RectangleBtnWithLabel01";
import RectangleBtnWithLink01 from "../../commons/button/RectangleBtnWithLink01";

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
        width: 30rem;
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
const IdInputWrapper = styled.div`
    width: 80%;
    height: 100%;
    padding-right: 1rem;
    @media screen and (max-width: 1024px) {
        width: 70%;
    }
`;
const IdCheckBtnWrapper = styled.div`
    width: 20%;
    height: 100%;
    padding-left: 1rem;
    @media screen and (max-width: 1024px) {
        width: 30%;
    }
`;
const NameInputWrapper = styled.div`
    width: 60%;
    height: 100%;
    padding-right: 1rem;
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
`;
const BirthInputWrapper = styled.div`
    width: 40%;
    height: 100%;
    padding-left: 1rem;
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
`;
const Inputs = styled.div`
    width: 100%;
    height: 100%;
`;
const BtnWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export default function SignUpPage() {
    return (
        <Wrapper>
            <Container>
                <Logo></Logo>
                <Form>
                    <Layer>
                        <IdInputWrapper>
                            <Inputs>
                                <InputWithLabel01
                                    name="userId"
                                    label="ID"
                                    inputType="text"
                                    placeHolder="Put the ID"
                                ></InputWithLabel01>
                            </Inputs>
                        </IdInputWrapper>
                        <IdCheckBtnWrapper>
                            <BtnWrapper>
                                <RectangleBtnWithLabel01
                                    label="&nbsp;"
                                    backgroundColor={COLORS.middlegrayColor}
                                    content="Check"
                                ></RectangleBtnWithLabel01>
                            </BtnWrapper>
                        </IdCheckBtnWrapper>
                    </Layer>
                    <Layer>
                        <Inputs>
                            <InputWithLabel01
                                name="userPw"
                                label="Password"
                                inputType="password"
                                placeHolder="Put the Password"
                            ></InputWithLabel01>
                        </Inputs>
                    </Layer>
                    <Layer>
                        <Inputs>
                            <InputWithLabel01
                                name="pwCheck"
                                label="Password Check"
                                inputType="password"
                                placeHolder="Put the Same Password"
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
                                    placeHolder="Put the Name"
                                ></InputWithLabel01>
                            </Inputs>
                        </NameInputWrapper>
                        <BirthInputWrapper>
                            <Inputs>
                                <InputWithLabel01
                                    name="birthday"
                                    label="Birthday"
                                    inputType="text"
                                    placeHolder="Birthday"
                                ></InputWithLabel01>
                            </Inputs>
                        </BirthInputWrapper>
                    </Layer>
                    <Layer>
                        <Inputs>
                            <InputWithLabel01
                                name="phoneNumber"
                                label="PhoneNumber"
                                inputType="text"
                                placeHolder="Put the phoneNumber"
                            ></InputWithLabel01>
                        </Inputs>
                    </Layer>
                    <Layer>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                content="Sign Up"
                                backgroundColor={COLORS.loginColor}
                                path="/"
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </Layer>
                </Form>
            </Container>
        </Wrapper>
    )
}