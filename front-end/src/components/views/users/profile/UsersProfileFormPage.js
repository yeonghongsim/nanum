import styled from "styled-components"
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import InputWithLabel02 from "../../../commons/input/InputWithLabel02";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
// const Content = styled.div`
//     width: 124rem;
//     min-height: 89%;
//     margin: auto;
//     padding: 1rem;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//     @media screen and (max-width: 1024px) {
//         width: 80%;
//     }
// `;
// const Form = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: flex-start;
//     gap: 1rem;
// `;
// const Layer = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
// `;
// const ImgContainer = styled.div`
//     width: 15rem;
//     height: 15rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     background-color: ${COLORS.lightgrayColor};
//     position: relative;
//     overflow: hidden;
// `;
// const Img = styled.img`
//     width: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
//     height: ${(props) => (props.isSelectedImg ? '100%' : '60%')};
// `;
// const AddBtnContainer = styled.div`
//     width: 3rem;
//     height: 3rem;
//     border: 1px solid black;
//     background-color: white;
//     border-radius: 1rem;
//     position: absolute;
//     top: 2rem;
//     right: 2rem;
//     opacity: 0.5;
//     transition: all 0.8s;
//     &:hover {
//         cursor: pointer;
//         opacity: 1;
//         transform: scale(1.05);
//     }
// `;
// const AddBtnIcon = styled.img`
//     width: 100%;
//     height: 100%;
// `;
// const HideInputFile = styled.input`
//     display: none;
// `;
// const InfoContainer = styled.div`
//     width: calc(100% - 15rem);
//     height: 15rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
//     padding: 1rem;
// `;
// const InputWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
// `;
// const BtnContainer = styled.div`
//     width: 100%;
//     height: 5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 2rem;
// `;
// const BtnWrapper = styled.div`
//     width: 12rem;
//     height: 3rem;
// `;

export default function UsersProfileFormPage(props) {
    // const userInfo = useSelector((state) => state.user.user);
    // const [selectedImg, setselectedImg] = useState('/icons/icon_profile.svg');
    // const [isSelectedImg, setIsSelectedImg] = useState(false);

    // const fileInputRef = useRef(null);
    // const handleFileClick = () => {
    //     fileInputRef.current.click();
    // };
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setselectedImg(reader.result);
    //         };
    //         reader.readAsDataURL(file);
    //         setIsSelectedImg(true);
    //     }
    // };
    // const imgFile = [];
    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            {/* <Content>
                <Form>
                    <Layer>
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
                                        placeHolder={userInfo.userName}
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                            <Layer>
                                <InputWrapper>
                                    <InputWithLabel02
                                        label="연락처"
                                        phoneNumber="phoneNumber"
                                        placeHolder={userInfo.phoneNumber}
                                    ></InputWithLabel02>
                                </InputWrapper>
                            </Layer>
                        </InfoContainer>
                    </Layer>
                </Form>
                <BtnContainer>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/users/profile"
                            content="뒤로 가기"
                            backgroundColor={COLORS.middlegrayColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/users/profile"
                            content="수정 완료"
                            backgroundColor={COLORS.linkColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                </BtnContainer>
            </Content> */}
        </Wrapper>
    )
}