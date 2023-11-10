import LayoutHeader from '../../commons/layout/header/LayoutHeader';
import LayoutCategoryNav from '../../commons/layout/categoryNav/LayoutCategoryNav';
import LayoutContent from '../../commons/layout/content/LayoutContent';
import LayoutFooter from '../../commons/layout/footer/LayoutFooter';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
export default function HomePage() {

    return (
        <Wrapper>
            <LayoutHeader></LayoutHeader>
            <LayoutCategoryNav></LayoutCategoryNav>
            <LayoutContent></LayoutContent>
            <LayoutFooter></LayoutFooter>
        </Wrapper>
    )
}