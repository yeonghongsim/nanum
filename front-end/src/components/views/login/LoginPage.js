import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import LOGO from "../../commons/logo/LOGO";
import InputWithLabel01 from "../../commons/input/InputWithLabel01";
import RectangleBtnWithLink01 from "../../commons/button/RectangleBtnWithLink01";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.whiteColor};
`;
const Wrapper = styled.div`
    width: 50rem;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        width: 30rem;
    }
`;
const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
const Form = styled.form`
    background-color: white;
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: 2rem;
    padding: 2rem;
`;
const BtnWrapper = styled.div`
    width: 100%;
`;

export default function LoginPage() {
    return (
        <Container>
            <Wrapper>
                <LoginContainer>
                    <Form>
                        <LOGO></LOGO>
                        <InputWithLabel01
                            label="Id"
                            name="userId"
                            inputType="text"
                            placeHolder="Put your Id"
                        ></InputWithLabel01>
                        <InputWithLabel01
                            label="Password"
                            name="userPw"
                            inputType="password"
                            placeHolder="Put your Password"
                        ></InputWithLabel01>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/"
                                content="Login"
                                backgroundColor={COLORS.loginColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/signUp"
                                content="Sign Up"
                                backgroundColor={COLORS.middlegrayColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </Form>
                </LoginContainer>
            </Wrapper>
        </Container>
    )
}