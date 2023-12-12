import styled from "styled-components"
import CheckBox01 from "./CheckBox01";
import { COLORS } from "../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    // border: 1px solid black;
`;
const Label = styled.label`
    font-size: 1.8rem;
    font-weight: bold;
`;
const CheckboxWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.5rem;
    border: 1px solid ${COLORS.middlegrayColor};
    border-radius: 0.5rem;
    box-sizing: border-box;
`;

export default function CheckboxWrapperWithLabel01(props) {
    return (
        <Wrapper>
            <Label>{props.label}</Label>
            <CheckboxWrapper>
                {
                    props.options.map((option, index) => (
                        <CheckBox01
                            key={index}
                            id={option.id}
                            label={option.label}
                            value={option.value}
                            itemTypeList={props.itemTypeList}
                        ></CheckBox01>
                    ))
                }
            </CheckboxWrapper>
        </Wrapper>
    )
}