import styled from "styled-components"
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import InputWithLabel02 from "../../../commons/input/InputWithLabel02";
import SelectBoxWithLabel02 from "../../../commons/select/SelectBoxWithLabel02";
import RectangleBtn04 from "../../../commons/button/RectangleBtn04";
import imageCompression from 'browser-image-compression';
import UersUpdateModal from "../../../commons/modal/uersUpdateModal/UersUpdateModal";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    margin-top: 3rem;
    gap: 3rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
        flex-direction: column;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        flex-direction: column;
    }
`;
const W50Container = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    padding: 1rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
    }
`;
const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
`;
const Layer = styled.div`
    width: 100%;
    height: 100%;
`;
const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: felx-start;
`;
const ImgContainer = styled.div`
    width: 15rem;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${COLORS.lightgrayColor};
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 512px) {
        width: 12rem;
        height: 12rem;
    }
`;
const Img = styled.img`
    width: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
    height: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
`;
const ImgBtnContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => (props.backgroundColor)};
    border-radius: 1rem;
    position: absolute;
    top: 2.2rem;
    right: 2.2rem;
    opacity: 0.5;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }
    @media screen and (max-width: 512px) {
        width: 2rem;
        height: 2rem;
    }
`;
const AddBtnIcon = styled.img`
    width: 100%;
    height: 100%;
`;
const HideInputFile = styled.input`
    display: none;
`;
const InfoContainer = styled.div`
    width: calc(100% - 15rem);
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    @media screen and (max-width: 512px) {
        width: calc(100% - 12rem);
        height: 12rem;
    }
`;
const LogInfoContainer = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-sizing: border-box;
    gap: 1rem;
`;
const PhoneNumberWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
const BrandNumberWrapper = styled.div`
    width: 30%;
    height: 100%;
    padding-right: 0.5rem;
`;
const NumbersWrapper = styled.div`
    width: 70%;
    height: 100%;
`;
const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
const BtnContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 3rem;
`;
const Padtop = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2rem;
`;

export default function UsersProfileFormPage(props) {
    // 회원 정보 조회
    const userInfo = useSelector((state) => state.user.user);
    // console.log(userInfo);
    // 회원 이미지 정보로 초기 데이터 세팅
    let profileImage;
    if (userInfo?.profileImgURL === null) {
        profileImage = '/icons/icon_profile.svg';
    } else {
        profileImage = userInfo?.profileImgURL;
    }
    // 사진 선택
    const [selectedImg, setSelectedImg] = useState(profileImage);
    // 사진 선택 유무
    let noneProfileImg;
    if (profileImage === '/icons/icon_profile.svg') {
        noneProfileImg = false;
    } else {
        noneProfileImg = true;
    }
    const [isSelectedImg, setIsSelectedImg] = useState(noneProfileImg);
    // refs
    const fileInputRef = useRef(null);
    const userNameRef = useRef(null);
    const brandNumberRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const userIdRef = useRef(null);
    const userPwRef = useRef(null);
    const [userProfileImage, setUserProfileImage] = useState({
        fileURL: null,
        fileName: null
    });
    // 파일 이미지 변경 유무
    const [changeProfileImg, setChangeProfileImg] = useState(false);
    // 아이디 중복 확인 변수
    const [duplicatedId, setDuplicatedId] = useState();
    // 파일 버튼 클릭
    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    // 파일 삭제 및 모든 정보 초기화
    const handleFileRemove = () => {
        setSelectedImg('/icons/icon_profile.svg');
        setIsSelectedImg(false);
        setUserProfileImage({
            fileURL: null,
            fileName: null
        });
        if (userInfo?.profileImgURL === null) {
            setChangeProfileImg(false);
        } else {
            setChangeProfileImg(true);
        }
    };
    // Blob 데이터를 Base64로 인코딩하는 함수
    const readFileAsDataURL = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    };
    // 이미지 파일 축소
    const compressAndEncodeImage = async (file) => {
        const options = {
            maxSizeMB: 0.5, // 최대 파일 크기 (0.5MB로 설정)
            maxWidthOrHeight: 800, // 이미지 최대 폭 또는 높이 800px
            useWebWorker: true, // 웹 워커 사용 여부
        };
        try {
            const compressedFile = await imageCompression(file, options);
            const compressedDataURL = await readFileAsDataURL(compressedFile);
            return compressedDataURL;
        } catch (error) {
            console.error('이미지 압축 오류: ', error);
            return null;
        }
    };
    // 파일 변경 함수
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                // 이미지 압축 후 Base64로 인코딩
                const compressedImage = await compressAndEncodeImage(file);
                if (compressedImage) {
                    const fileUrl = compressedImage;
                    setSelectedImg(fileUrl);
                    setIsSelectedImg(true);
                    setUserProfileImage({
                        fileURL: fileUrl,
                        fileName: file.name
                    });
                    if (userInfo.profileImgName === file.name) {
                        setChangeProfileImg(false);
                    } else {
                        setChangeProfileImg(true);
                    }
                } else {
                    // 압축에 실패한 경우에 대한 처리 (예: 알림, 기타 로직 추가)
                    console.error('이미지 압축에 실패했습니다.');
                }
            } catch (error) {
                console.error("Error encoding file:", error);
            }
        }
    };
    // 데이터 준비 및 유효성 검사, 모달 관련 코드 진행.
    // 데이터 통 변수
    const [preparedData, setPreparedData] = useState({});
    // 유효성 검사 및 부적합 결과를 위한 변수
    // 유저 이름 변수
    const [isErrUserName, setIsErrUserName] = useState(false);
    const [errMsgUserName, setErrMsgUserName] = useState('');
    // 유저 전화번호 변수
    const [isErrPhoneNumber, setIsErrPhoneNumber] = useState(false);
    const [errMsgPhoneNumber, setErrMsgPhoneNumber] = useState('');
    // 유저 아이디 변수
    const [isErrUserId, setIsErrUserId] = useState(false);
    const [errMsgUserId, setErrMsgUserId] = useState('');
    // 유저 비밀번호 변수
    const [isErrUserPw, setIsErrUserPw] = useState(false);
    const [errMsgUserPw, setErrMsgUserPw] = useState('');
    // 모달 여/닫 변수
    const [isOpenModal, setIsOpenModal] = useState(false);
    // 모달 열기 함수
    const handleOpenModal = async (what) => {
        // 컴포넌트 재사용으로 인한
        // 구분 조건 ( 프로필 수정 버튼 클릭 시 )
        if (what === 'profile') {
            // 가져온 데이터를 변수에 저장
            const userName = userNameRef.current.value;
            const brandNumber = brandNumberRef.current.value;
            const prevPhoneNumber = phoneNumberRef.current.value;
            const profileImgName = userProfileImage.fileName;
            const profileImgURL = userProfileImage.fileURL;
            // 데이터 유효성 검사 시작.
            // 1. 이름은 한글만 입력 가능.
            // 단, 빈 값이어도 괜찮.
            if (
                // userName !== '' &&
                // (!/^[가-힣]+$/.test(userName) || /\s/.test(userName))
                (userName !== '' &&
                    (!/^[가-힣]+$/.test(userName) || /\s/.test(userName) || userName.length < 2 || userName.length > 40))
            ) {
                setIsErrUserName(true);
                setErrMsgUserName('한글만 입력 가능하며, 빈 공백을 확인해주세요.');
            } else {
                setIsErrUserName(false);
                setErrMsgUserName('');
            }
            // 2. 전화번호는 숫자만 입력 가능.
            if (
                prevPhoneNumber !== '' &&
                prevPhoneNumber.length !== 8 &&
                (!/^[0-9]]+$/.test(prevPhoneNumber) || /\s/.test(prevPhoneNumber))
            ) {
                setIsErrPhoneNumber(true);
                setErrMsgPhoneNumber('숫자 8자리로 입력해주세요.');
            } else {
                setIsErrPhoneNumber(false);
                setErrMsgPhoneNumber('');
            }
            // 유효성 검사 부적합 시 진행할 코드.
            if (
                // (userName !== ''
                //     && (!/^[가-힣]+$/.test(userName) || /\s/.test(userName))) ||
                (userName !== '' &&
                    (!/^[가-힣]+$/.test(userName) || /\s/.test(userName) || userName.length < 2 || userName.length > 40)) ||
                (prevPhoneNumber !== ''
                    && prevPhoneNumber.length !== 8
                    && (!/^[0-9]]+$/.test(prevPhoneNumber) || /\s/.test(prevPhoneNumber)))
            ) {
                return;
            }
            // 변경 사항이 없는 경우
            if (
                !changeProfileImg
                && userName === ''
                && prevPhoneNumber === ''
            ) {
                return;
            }
            // 데이터 유효성 검사 끝.
            // 변수 통합하기
            const data = {
                userName: userName,
                brandNumber: brandNumber,
                middleNumber: prevPhoneNumber.slice(0, 4),
                lastNumber: prevPhoneNumber.slice(4,),
                profileImgName: profileImgName,
                profileImgURL: profileImgURL,
                whatBtn: what
            };
            // 준비한 데이터 저장
            setPreparedData(data);
            // 모달 열기
            setIsOpenModal(true);
        }
        // 구분 조건 ( 회원정보 수정 버튼 클릭 시 )
        if (what === 'logInfo') {
            // 가져온 데이터를 변수에 저장
            const userIdInput = userIdRef.current.value;
            const userPwInput = userPwRef.current.value;
            // 데이터 유효성 검사 시작.
            // 변경 사항이 없는 경우
            if (
                userIdInput === ''
                && userPwInput === ''
            ) {
                setIsErrUserId(false);
                setIsErrUserPw(false);
                return;
            }
            // 1. 아이디
            // 영문자, 숫자 각각 하나 이상 포함, 8-25자 이하
            const idValid = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/.test(userIdInput);
            if (userIdInput !== '' && !idValid) {
                setIsErrUserId(true);
                setErrMsgUserId('25자 이내의 영문,숫자만 입력가능합니다.');
            } else {
                setIsErrUserId(false);
                setErrMsgUserId('');
            }
            // 2. 비밀번호
            // 숫자, 영문자, 특수문자 각각 하나 이상 포함, 10자 이상 25자 이하
            const pwValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{10,25}$/.test(userPwInput);
            if (userPwInput !== '' && !pwValid) {
                setIsErrUserPw(true);
                setErrMsgUserPw('10자 이상 25자 이내의 영문,숫자,특수기호만 입력가능합니다.');
            } else {
                setIsErrUserPw(false);
                setErrMsgUserPw('');
            }
            // 유효성 검사 부적합 시 진행할 코드.
            if ((userIdInput !== '' && !idValid)
                || (userPwInput !== '' && !pwValid)) {
                return;
            }
            // 유효성 검사 끝 ( 통과 )
            // 변수 통합하기
            const data = {
                userId: userIdInput,
                userPassword: userPwInput,
                whatBtn: what,
            };
            // 아이디 중복 확인 함수
            await handleDuplicateId(data.userId);
            // 준비한 데이터 저장
            setPreparedData(data);
            // 모달 열기
            setIsOpenModal(true);
        }
    };
    // 아이디 중복 확인
    const handleDuplicateId = async (imsiId) => {
        try {
            const response = await fetch(`http://localhost:8080/checkId/${imsiId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const result = data.result;
            if (result == null) {
                console.log('사용가능한 아이디 입니다.');
                setDuplicatedId(false);
            } else {
                console.log('이미 사용중인 아이디 입니다.');
                setDuplicatedId(true);
            }
        } catch (error) {
            console.error('Error:', error);
            // 에러 처리 로직 추가 (예: 사용자에게 알림)
        }
    };
    // 모달 닫기 함수
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <W50Container>
                    <Form>
                        <ProfileContainer>
                            <ImgContainer>
                                <Img
                                    src={selectedImg}
                                    isSelectedImg={isSelectedImg}
                                    alt={userInfo?.profileImgName}
                                ></Img>
                                {
                                    isSelectedImg ?
                                        <ImgBtnContainer
                                            onClick={handleFileRemove}
                                            backgroundColor='red'
                                        >
                                            <AddBtnIcon src="/icons/icon_minus.svg"></AddBtnIcon>
                                        </ImgBtnContainer> :
                                        <ImgBtnContainer
                                            onClick={handleFileClick}
                                            backgroundColor='white'
                                        >
                                            <AddBtnIcon src="/icons/icon_plus.svg"></AddBtnIcon>
                                        </ImgBtnContainer>
                                }
                                <HideInputFile
                                    type="file"
                                    id="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                ></HideInputFile>
                            </ImgContainer>
                            <InfoContainer>
                                <Layer>
                                    <InputWrapper>
                                        <InputWithLabel02
                                            label="이름"
                                            inputType="text"
                                            placeHolder={userInfo?.userName}
                                            forwardedRef={userNameRef}
                                            isErr={isErrUserName}
                                            errMsg={errMsgUserName}
                                        ></InputWithLabel02>
                                    </InputWrapper>
                                </Layer>
                                <Layer>
                                    <PhoneNumberWrapper>
                                        <BrandNumberWrapper>
                                            <SelectBoxWithLabel02
                                                label="brandNumber"
                                                name="brandNumber"
                                                defaultValue={userInfo === null ? null : userInfo.phoneNumber.split('-')[0]}
                                                options={[
                                                    { label: "010", value: "010" },
                                                    { label: "011", value: "011" }
                                                ]}
                                                forwardedRef={brandNumberRef}
                                            ></SelectBoxWithLabel02>
                                        </BrandNumberWrapper>
                                        <NumbersWrapper>
                                            <InputWrapper>
                                                <InputWithLabel02
                                                    label="&nbsp;"
                                                    inputType="text"
                                                    phoneNumber="phoneNumber"
                                                    placeHolder={userInfo?.phoneNumber}
                                                    forwardedRef={phoneNumberRef}
                                                    isErr={isErrPhoneNumber}
                                                    errMsg={errMsgPhoneNumber}
                                                ></InputWithLabel02>
                                            </InputWrapper>
                                        </NumbersWrapper>
                                    </PhoneNumberWrapper>
                                </Layer>
                            </InfoContainer>
                        </ProfileContainer>
                    </Form>
                    <BtnContainer>
                        <BtnWrapper>
                            <RectangleBtn04
                                content="프로필 수정"
                                backgroundColor={COLORS.linkColor}
                                handleOpenModal={() => handleOpenModal('profile')}
                            ></RectangleBtn04>
                        </BtnWrapper>
                    </BtnContainer>
                    <UersUpdateModal
                        isOn={isOpenModal}
                        setIsOpenModal={setIsOpenModal}
                        handleCloseModal={handleCloseModal}
                        preparedData={preparedData}
                        changeProfileImg={changeProfileImg}
                        duplicatedId={duplicatedId}
                    ></UersUpdateModal>
                </W50Container>
                <W50Container>
                    <Form>
                        <LogInfoContainer>
                            <Layer>
                                <InputWrapper>
                                    <InputWithLabel02
                                        label="아이디"
                                        inputType="text"
                                        placeHolder={userInfo?.userId}
                                        forwardedRef={userIdRef}
                                        isErr={isErrUserId}
                                        errMsg={errMsgUserId}
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                            <Layer>
                                <InputWrapper>
                                    <InputWithLabel02
                                        label="비밀번호"
                                        inputType="password"
                                        forwardedRef={userPwRef}
                                        isErr={isErrUserPw}
                                        errMsg={errMsgUserPw}
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                        </LogInfoContainer>
                    </Form>
                    <Padtop>
                        <BtnContainer>
                            <BtnWrapper>
                                <RectangleBtn04
                                    content="회원정보 수정"
                                    backgroundColor={COLORS.linkColor}
                                    handleOpenModal={() => handleOpenModal('logInfo', duplicatedId)}
                                ></RectangleBtn04>
                            </BtnWrapper>
                        </BtnContainer>
                    </Padtop>
                </W50Container>
            </Content>
            <Padtop>
                <Layer>
                    <BtnContainer>
                        <BtnWrapper>
                            <RectangleBtnWithLink01
                                path="/users/profile"
                                content="뒤로 가기"
                                backgroundColor={COLORS.middlegrayColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </BtnContainer>
                </Layer>
            </Padtop>
        </Wrapper>
    )
}