import styled from "styled-components";
import { COLORS } from "../../../commons/styles/COLORS";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../../../commons/store/userSlice";
import store from "../../../commons/store/store";

const CardContainer = styled.div`
    width: 24rem;
    height: 24rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 20rem;
        height: 20rem;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 20rem;
    }
`;
const CardImgContainer = styled.div`
    width: 100%;
    height: 65%;
    border-radius: 0.5rem 0.5rem 0 0;
    border-bottom: 1px solid ${COLORS.middlegrayColor};
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
`;
const CardImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.8s ease-in-out;
    transform: ${({ currentIndex }) => `translateX(${currentIndex * -100}%)`};
    &:hover {
        cursor: pointer;
    }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
`;
const CardInfoContainer = styled.div`
    width: 100%;
    height: 35%;
    border-radius: 0 0 0.5rem 0.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.5rem;
`;
const TextCardName = styled.h1`
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
`;
const TextCardAddress = styled.p`
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0;
`;
const ChevronLeftDiv = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 45%;
    left: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }
`;
const ChevronRightDiv = styled.div`
    width: 3rem;
    height: 3rem;
    // border: 1px solid black;
    border-radius: 50%;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 45%;
    right: 1rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        opacity: 1;
        transform: scale(1.05);
    }
`;
const ChevronLeft = styled.img`
    width: 50%;
    height: 50%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
`;
const ChevronRight = styled.img`
    width: 50%;
    height: 50%;
    border-radius: 0.5rem 0.5rem 0 0;
    flex-shrink: 0;
`;
const LikeWrapper = styled.div`
    display: ${(props) => (props.isOn ? 'block' : 'none')};
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`;
const LikeBtn = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => (props.isLiked === 'liked' ? COLORS.likeColor : 'white')};
    transform: rotate(45deg);
    // transition: all 0.8s;
    position: relative;
    border-bottom: 2px solid ${COLORS.middlegrayColor};
    border-right: 2px solid ${COLORS.middlegrayColor};
    opacity: 0.85;
    &::before{
        content: "";
        width: 50%;
        height: 93.5%;
        left: -45%;
        background-color: ${(props) => (props.isLiked === 'liked' ? COLORS.likeColor : 'white')};
        position: absolute;
        border-radius: 3rem 0 0 3rem;
        border-top: 2px solid ${COLORS.middlegrayColor};
        border-bottom: 2px solid ${COLORS.middlegrayColor};
        border-left: 2px solid ${COLORS.middlegrayColor};
        // transition: all 0.8s;
    }
    &::after{
        content: "";
        width: 93.5%;
        height: 50%;
        top: -45%;
        background-color: ${(props) => (props.isLiked === 'liked' ? COLORS.likeColor : 'white')};
        position: absolute;
        border-radius: 3rem 3rem 0 0;
        border-top: 2px solid ${COLORS.middlegrayColor};
        border-left: 2px solid ${COLORS.middlegrayColor};
        border-right: 2px solid ${COLORS.middlegrayColor};
        // transition: all 0.8s;
    }
    &:hover {
        cursor: pointer;
        // background-color: ${COLORS.likeColor};
        opacity: 1;
    }
    &:hover:after {
        cursor: pointer;
        // background-color: ${COLORS.likeColor};
    }
    &:hover:before {
        cursor: pointer;
        // background-color: ${COLORS.likeColor};
    }
`;

export default function HomePageItemListCard({ item, isLogin, ...props }) {
    // 사용자 정보 조회
    const userInfo = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    // 현재 이미지의 index
    const [currentIndex, setCurrentIndex] = useState(0);
    // chevron 사용을 위해 최초,마지막 이미지 여부 확인
    const isAtFirstImage = currentIndex === 0;
    const isAtLastImage = currentIndex === item.imageList.length - 1;
    // 다음 이미지 보기 함수
    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : item.imageList.length - 1));
    };
    // 이전 이미지 보기 함수
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < item.imageList.length - 1 ? prevIndex + 1 : 0));
    };
    // 고유 아이디로 상세 페이지로 이동
    const handleItemId = (itemId) => {
        navigate(`/itemDetail/${itemId}`);
    };
    // 해당 아이템 위시리스트에 추가
    const handleLikeToggle = () => {
        const isLiked = userInfo.itemIdList.find(element => element === item._id);
        if (!isLiked) {
            // 좋아요 안 한 상태
            const copyArray = [...userInfo.itemIdList];
            copyArray.push(item._id);
            handleLike(copyArray);
        } else {
            // 좋아요 한 상태
            const copyArray = [...userInfo.itemIdList];
            const removedArray = copyArray.filter(value => value !== item._id);
            handleLike(removedArray);
        }
    };
    // 좋아요 로직
    const handleLike = async (likedArray) => {
        try {
            const userObjectId = userInfo._id;
            // 데이터 저장 통
            const data = {
                itemIdList: likedArray,
            };
            // 변경 사항 업데이트 통신 시작
            const fetchUrl = `http://localhost:8080/users/${userObjectId}/toggleLiked`;
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 기타 필요한 헤더 설정 가능
                },
                body: JSON.stringify(data),
            };
            // fetch
            const response = await fetch(fetchUrl, requestOptions);
            const responseData = await response.json();
            // 업데이트 성공 후 로직 코드 예정
            const updatedUser = {
                _id: responseData.updatedUser._id,
                userId: responseData.updatedUser.userId,
                userName: responseData.updatedUser.userName,
                birthday: responseData.updatedUser.birthday,
                phoneNumber: responseData.updatedUser.phoneNumber,
                profileImgURL: responseData.updatedUser.profileImgURL,
                profileImgName: responseData.updatedUser.profileImgName,
                itemIdList: responseData.updatedUser.itemIdList,
            };
            // store에 저장
            store.dispatch(setUser(updatedUser));
        } catch (error) {
            console.error('Error:', error);
        }
        // const userObjectId = userInfo._id;
        // // 데이터 저장 통
        // const data = {
        //     itemIdList: likedArray,
        // }
        // // // -- 변경 사항 업데이트 통신 시작
        // // // 통신 url
        // const fetchUrl = `http://localhost:8080/users/${userObjectId}/toggleLiked`;
        // // method, headers, body,
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // 기타 필요한 헤더 설정 가능
        //     },
        //     body: JSON.stringify(data),
        // };
        // // fetch
        // fetch(fetchUrl, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         // console.log('Response:', data);
        //         // 업데이트 성공 후 로직 코드 예정
        //         // console.log('Response:', data.updatedUser);
        //         // 데이터 셋업
        //         const updatedUser = {
        //             _id: data.updatedUser._id,
        //             userId: data.updatedUser.userId,
        //             userName: data.updatedUser.userName,
        //             birthday: data.updatedUser.birthday,
        //             phoneNumber: data.updatedUser.phoneNumber,
        //             profileImgURL: data.updatedUser.profileImgURL,
        //             profileImgName: data.updatedUser.profileImgName,
        //             itemIdList: data.updatedUser.itemIdList,
        //         }
        //         // // store에 저장
        //         store.dispatch(setUser(updatedUser));
        //     })
        //     .catch(error => console.error('Error:', error));
    };
    const [isLiked, setIsLiked] = useState();
    useEffect(() => {
        // 1. userInfo.itemIdList 체크.
        const userItemIdList = userInfo?.itemIdList || [];
        // 2. item._id 체크.
        const itemId = item?._id;
        // 3. 1의 리스트 중 2의 값을 갖고 있는 지 체크.
        const isItemInList = userItemIdList.includes(itemId);
        // 4. 3의 경우에 따라 갖고 있는 경우 console.log(1), 아닌 경우 console.log(2)
        if (isItemInList) {
            setIsLiked('unLiked')
        } else {
            setIsLiked('liked')
        }
    }, [userInfo?.itemIdList, item?._id]);

    return (
        <CardContainer key={item._id}>
            <CardImgContainer>
                <CardImgWrapper currentIndex={currentIndex}>
                    {
                        item.imageList.map((image, index) => (
                            <Img
                                key={index}
                                src={image.fileUrl}
                                alt={image.fileName}
                                onClick={() => handleItemId(item._id)}
                            ></Img>
                        ))
                    }
                </CardImgWrapper>
                {item.imageList.length > 1 && (
                    <>
                        {isAtLastImage ? null : (
                            <ChevronRightDiv onClick={handleNextImage}>
                                <ChevronRight src="/icons/icon_chevronRight.svg"></ChevronRight>
                            </ChevronRightDiv>
                        )}
                        {isAtFirstImage ? null : (
                            <ChevronLeftDiv onClick={handlePreviousImage}>
                                <ChevronLeft src="/icons/icon_chevronLeft.svg"></ChevronLeft>
                            </ChevronLeftDiv>
                        )}
                    </>
                )}
            </CardImgContainer>
            <CardInfoContainer>
                <TextCardName>{item.itemName}</TextCardName>
                <TextCardAddress>{item.locate}</TextCardAddress>
            </CardInfoContainer>
            {
                userInfo?._id !== item?.userId ?
                    <LikeWrapper isOn={isLogin}>
                        <LikeBtn
                            onClick={handleLikeToggle}
                            isLiked={isLiked}
                        ></LikeBtn>
                    </LikeWrapper> : null
            }
        </CardContainer>
    )
}