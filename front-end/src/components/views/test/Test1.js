import styled from "styled-components"
import { fetchItemTypes } from "../../commons/hooks/FetchItemTypes";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eee;
`;

export default function Test1() {
    // 사용 예시
    const testFunction = async () => {
        try {
            const itemTypes = await fetchItemTypes();
            console.log('Item Types:', itemTypes);
        } catch (error) {
            console.error('Error in testFunction:', error);
        }
    };

    // testFunction 호출
    testFunction();

    return (
        <Wrapper>
        </Wrapper>
    )
}