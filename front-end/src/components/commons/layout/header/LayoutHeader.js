import styled from 'styled-components';
import ProfileIcon from '../../profile/Profile';
import LoginModal from '../../modal/login/LoginModal';
import { useCallback, useState } from 'react';
import LOGO from '../../logo/LOGO';

const Wrapper = styled.div`
    width: 124rem;
    margin: auto;
    height: 7rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const LogoWrapper = styled.div`
    width: 12rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
// const SearchWrapper = styled.div`
//     width: 50%;
//     height: 100%;
//     box-sizing: border-box;
//     padding: 0.3rem;
// `;
const LoginWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        padding: 0 2rem 0 2rem;
    }
`;
export default function LayoutHeader() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const handleModalClose = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    return (
        <>
            <Wrapper>
                <LogoWrapper>
                    <LOGO></LOGO>
                </LogoWrapper>
                {/* <SearchWrapper>
                    <SearchInput01></SearchInput01>
                </SearchWrapper> */}
                <LoginWrapper>
                    <ProfileIcon
                        isLoginModalOpen={isLoginModalOpen}
                        setIsLoginModalOpen={setIsLoginModalOpen}
                        cursorStyle="pointer"
                    ></ProfileIcon>
                    <LoginModal
                        isLoginModalOpen={isLoginModalOpen}
                        setIsLoginModalOpen={setIsLoginModalOpen}
                        handleModalClose={handleModalClose}
                    ></LoginModal>
                </LoginWrapper>
            </Wrapper>
        </>
    )
}