import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 50rem;
    height: 50rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HeartDiv = styled.div`
    width: 10rem;
    height: 10rem;
    // background-color: red;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    position: relative;
    transform: rotate(45deg);
    &::before {
        content: "";
        width: 5rem;
        height: 9.9rem;
        position: absolute;
        // background-color: red;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        left: -49%;
        border-radius: 5rem 0 0 5rem;
    }
    &::after {
        content: "";
        width: 9.9rem;
        height: 5rem;
        position: absolute;
        // background-color: red;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        top: -49%;
        border-radius: 5rem 5rem 0 0;
    }
`;

export default function Heart() {
    return (
        <Wrapper>
            <Content>
                <HeartDiv></HeartDiv>
            </Content>
        </Wrapper>
    )
}