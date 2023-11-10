import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

const BtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.lightgrayColor};
`;
const Button = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
`;

export default function RectangleBtnWithDB01() {
    const handleEvent = () => {
        alert(111);
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify({
                userId: 'qwer1234',
                password: 'qwer1234',
                name: '심영홍',
                birthday: '1998.05.28',
                phoneNumber: '010-1234-5678'
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    };

    return (
        <BtnWrapper>
            <Button onClick={handleEvent}>
                click
            </Button>
        </BtnWrapper>
    )
}