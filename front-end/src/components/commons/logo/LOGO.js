import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";
import OnClickPageMove from "../hooks/OnClickPageMove";

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bolder;
    color: ${COLORS.primaryColor};
    cursor: pointer;
    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
        font-weight: bolder;
    }
`;

export default function LOGO() {
    return (
        <Title onClick={OnClickPageMove('/')}>Nanum</Title>
    )
}