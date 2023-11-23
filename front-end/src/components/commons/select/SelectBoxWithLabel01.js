import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import SelectBoxWrapper01 from "./SelectBoxWrapper01";

const SelectBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
`;
const Label = styled.label`
    font-size: 1.6rem;
    margin: 0;
`;
const SelectBox = styled.div`
    width: 100%;
    height: 100%;
    border: 0.1rem solid ${COLORS.lightgrayColor};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
`;

export default function SelectBoxWithLabel01(props) {
    return (
        <SelectBoxContainer>
            <Label
                htmlFor={props.name}
            >{props.label}</Label>
            <SelectBox>
                <SelectBoxWrapper01
                    options={props.options}
                    defaultValue={props.defaultValue}
                    name={props.name}
                    brandNumberRef={props.brandNumberRef}
                    handleOptionClick={props.handleOptionClick}
                ></SelectBoxWrapper01>
            </SelectBox>
        </SelectBoxContainer >
    )
}