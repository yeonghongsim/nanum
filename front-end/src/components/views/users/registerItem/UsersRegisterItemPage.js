import styled from "styled-components";
import UsersHeaderContainer from "../../../commons/layout/users/header/UsersHeaderContainer";
import RectangleBtnWithLink01 from "../../../commons/button/RectangleBtnWithLink01";
import { COLORS } from "../../../../commons/styles/COLORS";
import FileImageInputWrapper01 from "../../../commons/input/FileImageInputWrapper01";
import InputWithLabel03Ref from "../../../commons/input/InputWithLabel03Ref";
import TextAreaWithLabel01Ref from "../../../commons/input/TextAreaWithLabel01Ref";
import { useEffect, useRef, useState } from "react";
import CheckboxWrapperWithLabel01 from "../../../commons/checkbox/CheckboxWrapperWithLabel01";
import RectangleBtn03 from "../../../commons/button/RectangleBtn03";
import ResisterItemModal from "../../../commons/modal/resisterItem/ResisterItemModal";
import { useSelector } from "react-redux";
import { fetchItemTypes } from "../../../commons/hooks/FetchItemTypes";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Content = styled.div`
    width: 124rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 1rem;
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
    gap: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
`;
const Inputs = styled.div`
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
`;
const BtnContainer = styled.div`
    width: 100%;
    height: 7rem;
    // border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;
const BtnWrapper = styled.div`
    width: 12rem;
    height: 3rem;
`;
const CityContainer = styled.div`
    width: 20%;
    height: 100%;
`;
const GuConainer = styled.div`
    width: 20%;
    height: 100%;
`;
const RoadContainer = styled.div`
    width: 60%;
    height: 100%;
`;
const ErrDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-right: 1rem;
    box-sizing: border-box;
    // position: absolute;
`;
const ErrMsg = styled.p`
    font-size: 1.2rem;
    font-weight: normal;
    color: red;
    margin: 0;
    &:before {
        content: '*';
    }
`;
export default function UsersRegisterItemPage() {
    const [itemTypes, setItemTypes] = useState([]);
    useEffect(() => {
        // fetching itemtypes
        const fetchData = async () => {
            try {
                const fetchedItemTypes = await fetchItemTypes();
                // console.log('Item Types:', itemTypes);
                setItemTypes(fetchedItemTypes);
            } catch (error) {
                console.error('Error fetching item types:', error);
            }
        };
        fetchData();
    }, []);

    // 사용자 정보
    const userInfo = useSelector((state) => state.user.user);
    // input들의 ref
    const imageList = useState([]);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const itemNameRef = useRef(null);
    const locateCityRef = useRef(null);
    const locateGuRef = useRef(null);
    const locateRoadRef = useRef(null);
    const itemTypeList = useState([]);
    // control err
    const [isErrImageList, setIsErrImageList] = useState(false);
    const [errMsgImageList, setErrMsgImageList] = useState('');
    const [isErrItemName, setIsErrItemName] = useState(false);
    const [errMsgItemName, setErrMsgItemName] = useState('');
    const [isErrTitle, setIsErrTitle] = useState(false);
    const [errMsgTitle, setErrMsgTitle] = useState('');
    const [isErrLocate, setIsErrLocate] = useState(false);
    const [errMsgLocate, setErrMsgLocate] = useState('');
    const [isErrItemTypeList, setIsErrItemTypeList] = useState(false);
    const [errMsgitemTypeList, setErrMsgitemTypeList] = useState('');
    // data setting
    const [preparedData, setPreparedData] = useState({});
    // modal open
    const [isOnModal, setIsOnModal] = useState(false);
    // resister btn click
    const handleResisterItem = () => {
        // 데이터 주입
        const itemName = itemNameRef.current.value;
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        const locateCity = locateCityRef.current.value;
        const locateGu = locateGuRef.current.value;
        const locateRoad = locateRoadRef.current.value;
        const locate = locateCity +
            ' ' + locateGu +
            ' ' + locateRoad;
        // 데이터 유효성 검사 시작 ---
        // 이미지 검사
        // : 길이가 0 인 경우 실패
        if (imageList[0].length === 0) {
            setIsErrImageList(true);
            setErrMsgImageList('하나 이상의 이미지를 선택해야 합니다.');
        } else {
            setIsErrImageList(false);
            setErrMsgImageList('');
        }
        // 상품명 검사
        // : 띄어쓰기만 입력되어있는 경우 실패
        //   특수기호가 들어간 경우 실패
        const itemNameValidationRegex = /^[a-zA-Z0-9가-힣]+$/; // 특수문자를 제외한 문자 허용
        if (!itemName.trim() === '' || !itemNameValidationRegex.test(itemName)) {
            setIsErrItemName(true);
            setErrMsgItemName('빈값이나 특수기호를 확인해주세요.');
        } else {
            setIsErrItemName(false);
            setErrMsgItemName('');
        }
        // 제목 검사
        // : 띄어쓰기만 입력되어있는 경우 실패
        if (!title.trim() || /^\s+|\s+$/.test(title)) {
            setIsErrTitle(true);
            setErrMsgTitle('빈값을 확인해주세요.')
        } else {
            setIsErrTitle(false);
            setErrMsgTitle('')
        }
        // 주소 검사
        if (
            !locateCity.trim() || !/^[가-힣]+$/.test(locateCity) || /^\s+|\s+$/.test(locateCity) ||
            !locateGu.trim() || !/^[가-힣]+$/.test(locateGu) || /^\s+|\s+$/.test(locateGu) ||
            !locateRoad.trim() || !/^[\s가-힣0-9]+$/.test(locateRoad) || /^\s+|\s+$/.test(locateRoad)
        ) {
            setIsErrLocate(true);
            setErrMsgLocate('빈값이나 주소를 확인해주세요.');
        } else {
            setIsErrLocate(false);
            setErrMsgLocate('');
        }
        // // 1.시
        // // : 띄어쓰기만 입력되어있는 경우 실패
        // //   한글만 입력 가능
        // if (!locateCity.trim() || !/^[가-힣]+$/.test(locateCity) || /^\s+|\s+$/.test(locateCity)) {
        //     setIsErrLocate(true);
        //     setErrMsgLocate('주소를 확인해주세요.');
        // } else {
        //     setIsErrLocate(false);
        //     setErrMsgLocate('');
        // }
        // // 2.구
        // // : 띄어쓰기만 입력되어있는 경우 실패
        // //   한글만 입력 가능
        // if (!locateGu.trim() || !/^[가-힣]+$/.test(locateGu) || /^\s+|\s+$/.test(locateGu)) {
        //     setIsErrLocate(true);
        //     setErrMsgLocate('주소를 확인해주세요.');
        // } else {
        //     setIsErrLocate(false);
        //     setErrMsgLocate('');
        // }
        // // 3.도로
        // // : 띄어쓰기만 입력되어있는 경우 실패
        // //   한글, 숫자만 입력 가능
        // if (!locateRoad.trim() || !/^[\s가-힣0-9]+$/.test(locateRoad) || /^\s+|\s+$/.test(locateRoad)) {
        //     setIsErrLocate(true);
        //     setErrMsgLocate('도로명을 확인해주세요.');
        // } else {
        //     setIsErrLocate(false);
        //     setErrMsgLocate('');
        // }
        // 체크박스 검사
        // : 길이가 0 인 경우 실패
        if (itemTypeList[0].length === 0) {
            setIsErrItemTypeList(true);
            setErrMsgitemTypeList('최소 하나의 선택을 해주세요');
        } else {
            setIsErrItemTypeList(false);
            setErrMsgitemTypeList('');
        }
        // 만약 이상 있을 시 return 종료.
        if (
            imageList[0].length === 0 ||
            (!itemName.trim() === '' || !itemNameValidationRegex.test(itemName)) ||
            (!title.trim() || /^\s+|\s+$/.test(title)) ||
            (!locateCity.trim() || !/^[가-힣]+$/.test(locateCity) || /^\s+|\s+$/.test(locateCity)) ||
            (!locateGu.trim() || !/^[가-힣]+$/.test(locateGu) || /^\s+|\s+$/.test(locateGu)) ||
            (!locateRoad.trim() || !/^[\s가-힣0-9]+$/.test(locateRoad) || /^\s+|\s+$/.test(locateRoad)) ||
            itemTypeList[0].length === 0
        ) {
            return;
        }
        // 데이터 유효성 검사 끝 ---
        // 데이터 저장
        const data = {
            imageList: imageList[0],
            itemName: itemName,
            title: title,
            content: content,
            locate: locate,
            itemTypeList: itemTypeList[0],
            userId: userInfo._id,
            phoneNumber: userInfo.phoneNumber,
            isShared: 'false',
            likedUserId: [],
        };
        // 저장한 데이터 세팅
        setPreparedData(data);
        // 모달창 오픈
        setIsOnModal(true);
    };

    return (
        <Wrapper>
            <UsersHeaderContainer></UsersHeaderContainer>
            <Content>
                <Form>
                    <Inputs>
                        <FileImageInputWrapper01
                            imageList={imageList}
                        ></FileImageInputWrapper01>
                    </Inputs>
                    {
                        isErrImageList ?
                            <ErrDiv>
                                <ErrMsg>{errMsgImageList}</ErrMsg>
                            </ErrDiv> : null
                    }
                    <Inputs>
                        <InputWithLabel03Ref
                            label="상품명"
                            id="itemName"
                            inputType="text"
                            forwardedRef={itemNameRef}
                            placeHolder="상품명을 입력해주세요."
                        ></InputWithLabel03Ref>
                    </Inputs>
                    {
                        isErrItemName ?
                            <ErrDiv>
                                <ErrMsg>{errMsgItemName}</ErrMsg>
                            </ErrDiv> : null
                    }
                    <Inputs>
                        <InputWithLabel03Ref
                            label="제목"
                            id="title"
                            inputType="text"
                            forwardedRef={titleRef}
                            placeHolder="제목을 입력해주세요."
                        ></InputWithLabel03Ref>
                    </Inputs>
                    {
                        isErrTitle ?
                            <ErrDiv>
                                <ErrMsg>{errMsgTitle}</ErrMsg>
                            </ErrDiv> : null
                    }
                    <Inputs>
                        <TextAreaWithLabel01Ref
                            label="내용"
                            id="content"
                            inputType="text"
                            forwardedRef={contentRef}
                            placeHolder="내용을 입력해주세요."
                        ></TextAreaWithLabel01Ref>
                    </Inputs>
                    <Inputs>
                        <CityContainer>
                            <InputWithLabel03Ref
                                label="시/도"
                                id="locateCity"
                                inputType="text"
                                forwardedRef={locateCityRef}
                                placeHolder="예) 울산광역시"
                            ></InputWithLabel03Ref>
                        </CityContainer>
                        <GuConainer>
                            <InputWithLabel03Ref
                                label="구"
                                id="locateGu"
                                inputType="text"
                                forwardedRef={locateGuRef}
                                placeHolder="북구"
                            ></InputWithLabel03Ref>
                        </GuConainer>
                        <RoadContainer>
                            <InputWithLabel03Ref
                                label="도로명"
                                id="locateRoad"
                                inputType="text"
                                forwardedRef={locateRoadRef}
                                placeHolder="연암동"
                            ></InputWithLabel03Ref>
                        </RoadContainer>
                    </Inputs>
                    {
                        isErrLocate ?
                            <ErrDiv>
                                <ErrMsg>{errMsgLocate}</ErrMsg>
                            </ErrDiv> : null
                    }
                    <Inputs>
                        <CheckboxWrapperWithLabel01
                            label="상품의 종류"
                            options={itemTypes.map(item => ({
                                id: item._id,
                                value: item.value,
                                label: item.label,
                            }))}
                            itemTypeList={itemTypeList}
                        ></CheckboxWrapperWithLabel01>
                    </Inputs>
                    {
                        isErrItemTypeList ?
                            <ErrDiv>
                                <ErrMsg>{errMsgitemTypeList}</ErrMsg>
                            </ErrDiv> : null
                    }
                </Form>
                <BtnContainer>
                    <BtnWrapper>
                        <RectangleBtnWithLink01
                            path="/users/itemList"
                            content="뒤로가기"
                            backgroundColor={COLORS.middlegrayColor}
                        ></RectangleBtnWithLink01>
                    </BtnWrapper>
                    <BtnWrapper>
                        <RectangleBtn03
                            content="등록하기"
                            backgroundColor={COLORS.linkColor}
                            onClick={handleResisterItem}
                        ></RectangleBtn03>
                        <ResisterItemModal
                            isOn={isOnModal}
                            setIsOnModal={setIsOnModal}
                            content="등록하시겠습니까?"
                            preparedData={preparedData}
                        ></ResisterItemModal>
                    </BtnWrapper>
                </BtnContainer>
            </Content>
        </Wrapper>
    )
}