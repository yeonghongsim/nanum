import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import { useEffect, useState } from "react";

const SelectBoxWrapper = styled.div`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 1.5rem;
    color: ${COLORS.middlegrayColor};
    background-color: ${COLORS.whiteColor};
    cursor: pointer;
    display: flex;
    aling-items: center;
    justify-content: flex-start;
    position: relative;
`;
const SelectBox = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const OptionWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${COLORS.whiteColor};
    top: 103%;
    left: 0;
    cursor: pointer;
    box-sizing: border-box;
    display: ${(props) => (props.isOn ? 'block' : 'none')};
`;

const Options = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 1.8rem;
    border: 0.1rem solid ${COLORS.lightgrayColor};
    border-top: none;
    background-color: ${COLORS.whiteColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    color: ${COLORS.middlegrayColor};
`;

export default function SelectBoxWrapper01(props) {
    const [isOn, setIsOne] = useState(false);
    const [selectOption, setSelectOption] = useState(props.defaultValue);
    // const [selectOption, setSelectOption] = useState({ label: '', value: '' });
    const optionRef = props.brandNumberRef;

    const handleSelectBoxClick = () => {
        setIsOne(!isOn);
    };
    const handleOptionClick = (option) => {
        setIsOne(false);
        setSelectOption(option);
        props.handleOptionClick(option);
    };

    useEffect(() => {
        window.addEventListener("click", handleOutsideClick);

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, []);
    const handleOutsideClick = (e) => {
        if (optionRef.current && !optionRef.current.contains(e.target)) {
            setIsOne(false);
        }
    };

    return (
        // <SelectBoxWrapper ref={optionRef}>
        <SelectBoxWrapper ref={optionRef}>
            <SelectBox onClick={handleSelectBoxClick}>
                {selectOption.label}
            </SelectBox>

            <OptionWrapper isOn={isOn} ref={optionRef}>
                {
                    props.options.map((option, index) => (
                        <Options key={index} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </Options>
                    ))
                }
            </OptionWrapper>
        </SelectBoxWrapper>
    )
}