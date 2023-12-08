import styled from "styled-components";
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import FileImageInputWrapper01 from "../../../commons/input/FileImageInputWrapper01";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
`;
const Inputs = styled.div`
    width: 100%;
    // height: 5rem;
    border: 1px solid black;
    padding: 1rem;
    box-sizing: border-box;
`;
const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    algin-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 2rem;
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 3rem;
`;
const Text = styled.p`
    font-size: 1.6rem;
`;

export default function UsersRegisterItemPage() {
    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <Form>
                    <Inputs>
                        <FileImageInputWrapper01></FileImageInputWrapper01>
                    </Inputs>
                    <Inputs>
                        <Text>제목</Text>
                    </Inputs>
                    <Inputs>
                        <Text>내용</Text>
                    </Inputs>
                    <Inputs>
                        <Text>지역</Text>
                    </Inputs>
                    <Inputs>
                        <Text>체크박스(상품의 종류)</Text>
                    </Inputs>
                </Form>
                <BtnContainer>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/users/itemList"
                            content="뒤로가기"
                            backgroundColor={COLORS.middlegrayColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/"
                            content="등록하기"
                            backgroundColor={COLORS.linkColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                </BtnContainer>
            </Content>
        </Wrapper>
    )
}