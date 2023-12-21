import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";
import LOGO from "../../commons/logo/LOGO";
import RectangleBtnWithLink01 from "../../commons/button/RectangleBtnWithLink01";
import RectangleBtn01 from "../../commons/button/RectangleBtn01";
import InputWithLabel02Ref from "../../commons/input/InputWithLabel02Ref";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../commons/store/store";
// import { useDispatch } from "react-redux";
import { setUser } from "../../../commons/store/userSlice";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${COLORS.whiteColor};
`;
const Wrapper = styled.div`
    width: 60rem;
    margin: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 1024px) {
        width: 50rem;
    }
    @media screen and (max-width: 414px) {
        width: 35rem;
    }
`;
const LoginContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;
const Form = styled.form`
    background-color: white;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    gap: 2rem;
    padding: 2rem;
`;
const BtnWrapper = styled.div`
    width: 100%;
`;

export default function LoginPage() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const userIdRef = useRef(null);
    const userPwRef = useRef(null);
    const [isIdError, setIsIdError] = useState(false);
    const [isPwError, setIsPwError] = useState(false);
    const [idErrMsg, setIdErrMsg] = useState('');
    const [pwErrMsg, setPwErrMsg] = useState('');
    const handleLoginClick = () => {
        const userId = userIdRef.current.value;
        const userPassword = userPwRef.current.value;
        // 한글 포함 유효성 검사
        const idValid = /^(?=.*[ㄱ-ㅎㅏ-ㅣ가-힣])\S+$/.test(userId);

        // 초기화
        setIsIdError(false);
        setIdErrMsg('');
        setIsPwError(false);
        setPwErrMsg('');
        // 아이디와 비밀번호가 모두 빈 값인 경우
        if (!userId && !userPassword) {
            setIsIdError(true);
            setIdErrMsg('아이디를 입력해주세요.');
            setIsPwError(true);
            setPwErrMsg('비밀번호를 입력해주세요.');
            return;
        }
        // 아이디만 빈 값인 경우
        if (!userId) {
            setIsIdError(true);
            setIdErrMsg('아이디를 입력해주세요.');
            return;
        }
        // 비밀번호만 빈 값인 경우
        if (!userPassword) {
            setIsPwError(true);
            setPwErrMsg('비밀번호를 입력해주세요.');
            return;
        }
        // 아이디에 한글이 있는 경우
        if (idValid) {
            setIsIdError(true);
            setIdErrMsg('한글이 있는지 확인해주세요.');
            return;
        }
        // 로그인 성공
        loginFetch(userId, userPassword);
    };

    const loginFetch = async (userId, userPassword) => {
        // console.log('login fetch start');
        // 데이터 저장
        const data = {
            userId: userId,
            userPassword: userPassword
        };
        // get Url
        const url = 'http://localhost:8080/login';
        // 객체를 쿼리 문자열로 변환
        const queryString = new URLSearchParams(data).toString();
        // url에 쿼리 문자열 추가
        const fullUrl = `${url}?${queryString}`;
        fetch(fullUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // 요청 헤더 설정 (JSON을 사용하는 경우)
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.result == null) {
                    // console.log('회원정보 불일치');
                    setIsPwError(true);
                    setPwErrMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
                } else {
                    // console.log('회원정보 일치');
                    const userInfo = {
                        _id: data.result._id,
                        userId: data.result.userId,
                        userName: data.result.userName,
                        birthday: data.result.birthday,
                        phoneNumber: data.result.phoneNumber,
                        profileImgURL: data.result.profileImgURL,
                        profileImgName: data.result.profileImgName,
                    }
                    // console.log(userInfo);
                    // store에 저장
                    store.dispatch(setUser(userInfo));
                    // 페이지 이동
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('error : ' + error);
            })
    };

    return (
        <Container>
            <Wrapper>
                <LoginContainer>
                    <Form>
                        <LOGO></LOGO>
                        <InputWithLabel02Ref
                            label="Id"
                            placeHolder="아이디를 입력하세요."
                            inputType="text"
                            id="userId"
                            forwardedRef={userIdRef}
                            isOnErr={isIdError}
                            errMsg={idErrMsg}
                        ></InputWithLabel02Ref>
                        <InputWithLabel02Ref
                            label="Password"
                            placeHolder="비밀번호를 입력하세요."
                            inputType="password"
                            id="userPw"
                            forwardedRef={userPwRef}
                            isOnErr={isPwError}
                            errMsg={pwErrMsg}
                        ></InputWithLabel02Ref>
                        <BtnWrapper>
                            <RectangleBtn01
                                content="Login"
                                backgroundColor={COLORS.loginColor}
                                handleLoginClick={handleLoginClick}
                            ></RectangleBtn01>
                        </BtnWrapper>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/signUp"
                                content="Sign Up"
                                backgroundColor={COLORS.middlegrayColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </Form>
                </LoginContainer>
            </Wrapper>
        </Container>
    )
}