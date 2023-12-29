import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";

const Container = styled.div`
    width: 100%;
    height: 6rem;
    background-color: ${COLORS.lightgrayColor};
`;
const Wrapper = styled.div`
    width: 124rem;
    height: 100%;
    margin: auto;
    display: flex;
    aligm-items: center;
    justify-content: flex-start;
`;
const CopyrightDiv = styled.div`
    width: 15rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;
const CopyRightImg = styled.img`
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
`;
const TextP = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
`;
const TextSpan = styled.span`
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0;
`;
const AnnounceDiv = styled.div`
    width: 50rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 2rem;
`;

export default function LayoutFooter() {
    return (
        <Container>
            <Wrapper>
                <CopyrightDiv>
                    <CopyRightImg src="/icons/icon_copyright.svg"></CopyRightImg>
                    <TextP>copyright</TextP>
                </CopyrightDiv>
                <AnnounceDiv>
                    <TextSpan>물건을 찾고, 공유하세요. 로그인했을 때 나눔자의 연락처를 확인하실 수 있습니다.</TextSpan>
                </AnnounceDiv>
            </Wrapper>
        </Container>
    )
}