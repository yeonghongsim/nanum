import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";

const Container = styled.div`
    width: 100%;
    height: 8rem;
    background-color: ${COLORS.lightgrayColor};
`;
const Wrapper = styled.div`
    width: 124rem;
    height: 100%;
    margin: auto;
`;

export default function LayoutFooter() {
    return (
        <Container>
            <Wrapper>
                Footer
            </Wrapper>
        </Container>
    )
}