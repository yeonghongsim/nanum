import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import { useRef, useState } from "react";

const Wrapper = styled.div`
    // width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
`;
const CheckInput = styled.input`
    // width: 100%;
    // height: 100%;
    width: 2rem;
    height: 2rem;
    border: none;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("/images/checkbox_rectangle_unchecked.svg");
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    border-radius: 0.5rem;
    &:checked {
        background-image: url("/images/checkbox_rectangle_checked.svg");
        border: none;
    }
`;
const Label = styled.label`
    font-size: 1.4rem;
    font-weight: normal;
    color: ${(props) => (props.checked ? COLORS.linkColor : COLORS.middlegrayColor)};
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    &:hover {
        cursor: pointer;
        color: ${COLORS.linkColor};
    }
`;

export default function CheckBox01(props) {
    const checkboxRef = useRef(null);
    const [checked, setChecked] = useState(false);
    // console.log(props.itemTypeList[0]);
    const handleChkboxClick = () => {
        setChecked(!checked);

        // 체크박스가 체크되었을 때 itemTypeList에 id를 추가
        if (!checked) {
            props.itemTypeList[0].push(props.label);
        } else {
            // 체크박스가 체크 해제되었을 때 itemTypeList에서 해당 id를 제거
            const index = props.itemTypeList[0].indexOf(props.label);
            if (index !== -1) {
                props.itemTypeList[0].splice(index, 1);
            }
        }
        // itemTypeList를 오름차순으로 정렬
        props.itemTypeList[0].sort((a, b) => a - b);
    };

    // useEffect(() => {
    //     console.log(checkboxRef.current.checked);
    // }, []);


    return (
        <Wrapper>
            <CheckInput
                type="checkbox"
                id={props.id}
                value={props.value}
                checked={checked}
                onChange={handleChkboxClick}
                ref={checkboxRef}
            ></CheckInput>
            <Label
                htmlFor={props.id}
                checked={checked}
            >{props.label}</Label>
        </Wrapper>
    )
}