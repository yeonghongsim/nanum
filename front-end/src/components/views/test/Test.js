import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.lightgrayColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Container = styled.div`
    width: 80%;
    height: 80%;
    background-color: ${COLORS.whiteColor};
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 5rem;
    padding: 1rem;
`;
const Btn = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    background-color: black;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default function TestPage() {
    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8080/signUp', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: 'qwer1234',
                    password: 'qwer1234',
                    name: '심영홍',
                    birthday: '1998.05.28',
                    phoneNumber: '010-1234-5678'
                })
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
                <BtnWrapper>
                    <Btn onClick={handleClick}>click</Btn>
                </BtnWrapper>
            </Container>
        </Wrapper>
    )
}