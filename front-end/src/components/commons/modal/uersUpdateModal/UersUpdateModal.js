import { useEffect, useRef } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../commons/styles/COLORS";
import RectangleBtn03 from "../../button/RectangleBtn03";
import { useSelector } from "react-redux";
import store from "../../../../commons/store/store";
import { setUser } from "../../../../commons/store/userSlice";
// import Spinner from "../../hooks/Spinner";


const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: ${(props) => (props.isOn ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    z-index: 200;
`;
const Content = styled.div`
    width: 100rem;
    height: 50rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    @media screen and (max-width: 1024px) {
        width: 80%;
        height: 60%;
    }
`;
const ModalHead = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 0.1rem solid ${COLORS.primaryColor};
`;
const TextHead = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0;
    padding-left: 1rem;
`;
const ModalBody = styled.div`
    width: 100%;
    height: calc(100% - 10rem);
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
`;
const BodyText = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
`;
const BtnContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
`;
const BtnWrapper = styled.div`
    width: 9rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AskUpdateText = styled.p`
    font-size: 1.6rem;
    font-weight: normal;
    margin: 0;
    position: absolute;
    bottom: 2rem;
    left: 1rem;
`;

export default function UersUpdateModal({
    isOn,
    setIsOpenModal,
    handleCloseModal,
    preparedData,
    ...props
}) {
    // 회원정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // console.log(userInfo);
    // 모달 ref
    const modalRef = useRef(null);
    // 모달 외각 클릭 시 모달 닫힘 함수
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                // 모달 외부를 클릭했을 때 모달을 닫습니다.
                setIsOpenModal(false);
            }
        };
        // 컴포넌트가 마운트될 때 document에 이벤트 리스너를 등록합니다.
        document.addEventListener("mousedown", handleOutsideClick);
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setIsOpenModal]);
    // 전달받은 whatBtn 에 따라 코드 실행 다르게
    // whatBtn - profile
    let handleUpdateUserInfo;
    if (preparedData.whatBtn === 'profile') {
        // fetch post 함수. - 프로필 정보
        handleUpdateUserInfo = async () => {
            // 각각의 데이터
            let userName = preparedData.userName;
            let phoneNumber = preparedData.brandNumber + '-'
                + preparedData.middleNumber + '-'
                + preparedData.lastNumber;
            let profileImgName = preparedData.profileImgName;
            let profileImgURL = preparedData.profileImgURL;
            const userObjectId = userInfo._id;
            // 변경사항 3가지 ( 이미지, 이름, 연락처 )
            // 이미지 변경 하지 않는 경우
            // if (preparedData.profileImgURL === null) {
            // }
            // 이름 변경 하지 않는 경우
            if (userName === '') {
                userName = userInfo.userName;
            }
            // 연락처 변경 하지 않는 경우
            if (phoneNumber.length === 5) {
                phoneNumber = userInfo.phoneNumber;
            }
            // 데이터 저장 통
            const data = {
                profileImgName: profileImgName,
                profileImgURL: profileImgURL,
                userName: userName,
                phoneNumber: phoneNumber,
                userObjectId: userObjectId,
            }
            // console.log(data);
            // -- 변경 사항 업데이트 통신 시작
            // 통신 url
            const fetchUrl = `http://localhost:8080/users/${userObjectId}/updateProfile`;
            // method, headers, body,
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 기타 필요한 헤더 설정 가능
                },
                body: JSON.stringify(data),
            };
            // fetch
            fetch(fetchUrl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('Response:', data);
                    // 업데이트 성공 후 로직 코드 예정
                    console.log('Response:', data.updatedUser);
                    // 데이터 셋업
                    const updatedUser = {
                        _id: data.updatedUser._id,
                        userId: data.updatedUser.userId,
                        userName: data.updatedUser.userName,
                        birthday: data.updatedUser.birthday,
                        phoneNumber: data.updatedUser.phoneNumber,
                        profileImgURL: data.updatedUser.profileImgURL,
                        profileImgName: data.updatedUser.profileImgName,
                    }
                    // // store에 저장
                    store.dispatch(setUser(updatedUser));
                    // 페이지 변경 로직
                    window.location.href = '/users/profile';
                })
                .catch(error => console.error('Error:', error));
        };
    }
    // whatBtn - logInfo
    let handleUpdateLogInfo;
    let changeId;
    let changedPw;
    // let duplicatedId;
    if (preparedData.whatBtn === 'logInfo') {
        // userId 변경값이 있을때/없을때
        if (preparedData.userId === '') {
            changeId = false;
        } else {
            changeId = true;
            console.log(preparedData.userId);
            // 아이디 중복 확인 함수 코드 예정
            // 1. 중복인 경우
            // 뒤로가기
            // 2. 중복이 아닌 경우
            // 뒤로가기+변경하기
        }
        // userPw 변경값이 있을때/없을때
        if (preparedData.userPw === '') {
            changedPw = false;
        } else {
            changedPw = true;
        }
        // fetch post 함수. - 프로필 정보
        handleUpdateLogInfo = async () => {
            // 유저 고유 아이디
            const userObjectId = userInfo._id;
            // 1. 데이터 변수 ( 아이디, 비번 )
            let userId = preparedData.userId;
            let userPassword = preparedData.userPassword;
            // 2. 데이터가 변경되지 않은 경우
            if (userId === '') {
                userId = userInfo.userId;
            };
            if (userPassword === '') {
                // 비밀번호를 가져오고자 하는 경우
                try {
                    const fetchedPassword = await getUserPassword(userId);
                    userPassword = fetchedPassword;
                    console.log('fetching check');
                    console.log('userPassword : ' + userPassword);
                } catch (error) {
                    console.error('error : ' + error);
                    // 에러 처리
                }
            };
            // 3. 데이터를 저장할 통
            const data = {
                userId: userId,
                userPassword: userPassword,
            }
            // -- 변경 사항 업데이트 통신 시작
            const fetchUrl = `http://localhost:8080/users/${userObjectId}/updateLoginfo`;
            // method, headers, body,
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 기타 필요한 헤더 설정 가능
                },
                body: JSON.stringify(data),
            };
            // fetch
            fetch(fetchUrl, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('Response:', data);
                    // 업데이트 성공 후 로직 코드 예정
                    // 데이터 셋업
                    store.dispatch(setUser(null));
                    // 페이지 변경 로직
                    window.location.href = '/login';
                })
                .catch(error => console.error('Error:', error));
            // -- 변경 사항 업데이트 통신 끝
        };
    }
    // getUserPassword
    const getUserPassword = async (userId) => {
        // 데이터 저장
        const data = {
            userId: userId
        };
        // get Url
        const url = 'http://localhost:8080/getUserPassword';
        // 객체를 쿼리 문자열로 변환
        const queryString = new URLSearchParams(data).toString();
        // url에 쿼리 문자열 추가
        const fullUrl = `${url}?${queryString}`;
        // gpt에서 알려준 코드
        try {
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            if (responseData.result == null) {
                console.log('회원정보 불일치');
                return null; // 데이터가 없을 경우 명시적으로 null 반환
            } else {
                console.log('회원정보 일치');
                console.log('result: ' + responseData.result);
                const password = responseData.result;
                return password;
            }
        } catch (error) {
            console.error('error: ' + error);
            throw error;
        }
        // 내 코드
        // await fetch(fullUrl, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json' // 요청 헤더 설정 (JSON을 사용하는 경우)
        //     }
        // })
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         if (data.result == null) {
        //             console.log('회원정보 불일치');
        //         } else {
        //             console.log('회원정보 일치');
        //             console.log('result' + data.result);
        //             const password = data.result;
        //             return password;
        //         }
        //     })
        //     .catch(error => {
        //         console.error('error : ' + error);
        //         throw error;
        //     })
    };
    // 세팅한 데이터 확인 콘솔
    // console.log(preparedData);

    return (
        <Wrapper isOn={isOn}>
            <Content ref={modalRef}>
                <ModalHead>
                    <TextHead>
                        변경하신 내용은
                    </TextHead>
                </ModalHead>
                <ModalBody>
                    {
                        preparedData.whatBtn === 'profile' ?
                            <>
                                <BodyText>
                                    프로필 이미지 :
                                    {
                                        props.changeProfileImg
                                            ? ' O ' : ' X '
                                    }
                                </BodyText>
                                <BodyText>
                                    이름 :
                                    {
                                        preparedData.userName === ''
                                            ? ' X ' : <> {preparedData.userName} </>
                                    }
                                </BodyText>
                                <BodyText>
                                    휴대전화 :
                                    {
                                        preparedData.middleNumber === ''
                                            ? ' X ' : <> {preparedData.brandNumber + '-'
                                                + preparedData.middleNumber + '-'
                                                + preparedData.lastNumber} </>
                                    }
                                </BodyText>
                            </>
                            : <>
                                <BodyText>
                                    아이디 중복 여부 : {preparedData.userId}
                                </BodyText>
                                <BodyText>
                                    변경할 아이디 : {changeId ? preparedData.userId : 'X'}
                                </BodyText>
                                <BodyText>
                                    비밀번호 변경 여부 : {changedPw ? 'O' : 'X'}
                                </BodyText>
                                {/* <Spinner></Spinner> */}
                            </>
                    }
                    <AskUpdateText>
                        입니다. 변경할 경우 자동으로 로그아웃되며, 로그인페이지로 이동합니다. 정말로 변경하시겠습니까?
                    </AskUpdateText>
                </ModalBody>
                <BtnContainer>
                    <BtnWrapper>
                        <RectangleBtn03
                            backgroundColor={COLORS.middlegrayColor}
                            content='취소하기'
                            onClick={handleCloseModal}
                        ></RectangleBtn03>
                    </BtnWrapper>
                    <BtnWrapper>
                        {
                            preparedData.whatBtn === 'profile' ?
                                <RectangleBtn03
                                    backgroundColor={COLORS.linkColor}
                                    content='변경하기'
                                    onClick={handleUpdateUserInfo}
                                ></RectangleBtn03> :
                                <RectangleBtn03
                                    backgroundColor={COLORS.linkColor}
                                    content='변경하기'
                                    onClick={handleUpdateLogInfo}
                                ></RectangleBtn03>
                        }
                    </BtnWrapper>
                </BtnContainer>
            </Content>
        </Wrapper>
    )
}