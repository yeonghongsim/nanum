import styled from "styled-components"
import LOGO from "../../../logo/LOGO";
import { COLORS } from "../../../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 0.1rem solid ${COLORS.lightgrayColor};
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const Header = styled.div`
    width: 124rem;
    height: 8rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
`;
export default function UsersHeaderContainer() {
    return (
        <Wrapper>
            <Header>
                <LOGO></LOGO>
            </Header>
        </Wrapper>
    )
}