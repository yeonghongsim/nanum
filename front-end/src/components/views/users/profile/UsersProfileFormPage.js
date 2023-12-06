import styled from "styled-components"
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import InputWithLabel02 from "../../../commons/input/InputWithLabel02";
import SelectBoxWithLabel02 from "../../../commons/select/SelectBoxWithLabel02";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    padding-top: 3rem;
    gap: 3rem;
    @media screen and (max-width: 1024px) {
        width: 80%;
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
`;
const Img = styled.img`
    width: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
    height: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
`;
const AddBtnContainer = styled.div`
    width: 3rem;
    height: 3rem;
    border: 1px solid black;
    background-color: white;
    border-radius: 1rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    opacity: 0.5;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
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
    const userInfo = useSelector((state) => state.user.user);
    const [selectedImg, setselectedImg] = useState('/icons/icon_profile.svg');
    const [isSelectedImg, setIsSelectedImg] = useState(false);

    const fileInputRef = useRef(null);
    const handleFileClick = () => {
        fileInputRef.current.click();
    };
    const imgFile = [];
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log(file.name);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setselectedImg(reader.result);
            };
            reader.readAsDataURL(file);
            setIsSelectedImg(true);
        }
    };
    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <W50Container>
                    <Form>
                        <ProfileContainer>
                            <ImgContainer>
                                <Img src={selectedImg} isSelectedImg={isSelectedImg}></Img>
                                <AddBtnContainer onClick={handleFileClick}>
                                    <AddBtnIcon src="/icons/icon_plus.svg"></AddBtnIcon>
                                </AddBtnContainer>
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
                                            placeHolder={userInfo.userName}
                                        ></InputWithLabel02>
                                    </InputWrapper>
                                </Layer>
                                <Layer>
                                    <PhoneNumberWrapper>
                                        <BrandNumberWrapper>
                                            <SelectBoxWithLabel02
                                                label="brandNumber"
                                                name="brandNumber"
                                                defaultValue={userInfo.phoneNumber.split('-')[0]}
                                                options={[
                                                    { label: "010", value: "010" },
                                                    { label: "011", value: "011" }
                                                ]}
                                            ></SelectBoxWithLabel02>
                                        </BrandNumberWrapper>
                                        <NumbersWrapper>
                                            <InputWrapper>
                                                <InputWithLabel02
                                                    label="&nbsp;"
                                                    inputType="text"
                                                    phoneNumber="phoneNumber"
                                                    placeHolder={userInfo.phoneNumber}
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
                            <RectangleBtnWithLink01
                                path="/users/profile"
                                content="프로필 수정"
                                backgroundColor={COLORS.linkColor}
                            ></RectangleBtnWithLink01>
                        </BtnWrapper>
                    </BtnContainer>
                </W50Container>
                <W50Container>
                    <Form>
                        <LogInfoContainer>
                            <Layer>
                                <InputWrapper>
                                    <InputWithLabel02
                                        label="아이디"
                                        inputType="text"
                                        placeHolder={userInfo.userId}
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                            <Layer>
                                <InputWrapper>
                                    <InputWithLabel02
                                        label="비밀번호"
                                        inputType="password"
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                        </LogInfoContainer>
                    </Form>
                    <Padtop>
                        <BtnContainer>
                            <BtnWrapper>
                                <RectangleBtnWithLink01
                                    path="/users/profile"
                                    content="로그정보 수정"
                                    backgroundColor={COLORS.linkColor}
                                ></RectangleBtnWithLink01>
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