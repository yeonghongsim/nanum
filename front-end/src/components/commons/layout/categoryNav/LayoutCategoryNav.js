import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${COLORS.primaryColor};
    color: white;
    font-size: 1.8rem;
`;
const Nav = styled.nav`
    width: 124rem;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const NavLink = styled.div`
    width: 15rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        width: 11rem;
    }
`;
const NavText = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    cursor: pointer;
`;

export default function LayoutCategoryNav() {
    const categoryList = ['전체', '가전제품', '생활용품', '옷', '귀금속'];
    return (
        <Wrapper>
            <Nav>
                {
                    categoryList.map((category, i) =>
                        <NavLink key={i}>
                            <NavText>{category}</NavText>
                        </NavLink>
                    )
                }
            </Nav>
        </Wrapper>
    )
}