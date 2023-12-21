import styled from "styled-components"
import SelectBoxWrapper02 from "./SelectBoxWrapper02";
import { COLORS } from "../../../commons/styles/COLORS";

const SelectBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    :hover {
        cursor: pointer;
    }
`;
const Label = styled.label`
    font-size: 1.4rem;
    font-weight: normal;
`;
const SelectBox = styled.div`
    width: 100%;
    height: 4.2rem;
    border: 0.1rem solid ${COLORS.middlegrayColor};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
`;

export default function SelectBoxWithLabel02({ forwardedRef, ...props }) {

    return (
        <SelectBoxContainer>
            <Label htmlFor={props.name}>
                {props.label}
            </Label>
            <SelectBox>
                <SelectBoxWrapper02
                    options={props.options}
                    defaultValue={props.defaultValue}
                    forwardedRef={forwardedRef}
                ></SelectBoxWrapper02>
            </SelectBox>
        </SelectBoxContainer>
    )
}