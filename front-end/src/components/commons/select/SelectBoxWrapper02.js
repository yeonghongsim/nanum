import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import { useEffect, useRef, useState } from "react";

const SelectBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    position: relative;
`;
const SelectBox = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${COLORS.middlegrayColor};
`;
const OptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${COLORS.whiteColor};
    cursor: pointer;
    box-sizing: border-box;
    top: 103%;
    display: ${(props) => (props.isOn ? 'block' : 'none')};
`;
const Options = styled.div`
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-weight: normal;
    padding-left: 0.8rem;
    border: 0.1rem solid ${COLORS.middlegrayColor};
    border-top: none;
    background-color: ${COLORS.whiteColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    color: ${COLORS.middlegrayColor};
`;

export default function SelectBoxWrapper02(props) {
    const selectBoxRef = useRef(null);
    const [isOn, setIsOn] = useState(false);
    const [selectOption, setSelectOption] = useState(props.defaultValue);

    const handleSelectClick = () => {
        setIsOn(true);
    };
    const handleOptionClick = (option) => {
        setIsOn(false);
        setSelectOption(option.value);
    };
    const handleOutsideClick = (e) => {
        if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
            setIsOn(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <SelectBoxWrapper ref={selectBoxRef}>
            <SelectBox onClick={handleSelectClick}>{selectOption}</SelectBox>

            <OptionWrapper isOn={isOn}>
                {
                    props.options.map((option, index) => (
                        <Options
                            key={index}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.value}
                        </Options>
                    ))
                }
            </OptionWrapper>
        </SelectBoxWrapper>
    )
}