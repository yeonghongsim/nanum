import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";

const IdCheckBtnWrapper = styled.div`
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
`;
const RectangleBtn = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${(props) => (props.isOn ? COLORS.linkColor : COLORS.middlegrayColor)};
    opacity: ${(props) => (props.isIdConfirmed ? 0.7 : 1)};
    transition: all 0.8s;
`;
const Text = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
`;

export default function CheckBtnWithLabel01(props) {

    const checkIdInDB = () => {
        const imsiId = document.getElementById('userId').value;
        fetch('http://localhost:8080/checkId/' + imsiId)
            .then(res => res.json())
            .then((data) => {
                let result = data.result;
                if (result == null) {
                    const confirmMsg = window.confirm('사용가능한 아이디 입니다.');
                    if (confirmMsg) {
                        console.log('사용 클릭');
                        props.handleIdConfirmed(true);
                    } else {
                        props.handleIdConfirmed(false);
                    }
                } else {
                    alert('이미 사용중인 아이디 입니다.')
                }
            })
    };

    return (
        <IdCheckBtnWrapper>
            <Label>{props.label}</Label>
            <RectangleBtn
                id={props.id}
                isOn={props.isOn}
                onClick={props.isOn ? checkIdInDB : null}
                isIdConfirmed={props.isIdConfirmed}>
                <Text>{props.content}</Text>
            </RectangleBtn>
        </IdCheckBtnWrapper>
    )
}