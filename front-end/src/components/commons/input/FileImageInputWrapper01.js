import { useRef, useState } from "react";
import styled from "styled-components"

const FileImageInputWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    @media screen and (max-width: 512px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;
const HideInput = styled.input`
    display: none;
`;
const AddBtnContainer = styled.div`
    width: 5rem;
    height: 5rem;
    border: 1px solid black;
    background-color: white;
    border-radius: 1rem;
    // position: absolute;
    // top: 2rem;
    // right: 2rem;
    opacity: 1;
    transition: all 0.8s;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;
const AddBtnIcon = styled.img`
    width: 100%;
    height: 100%;
`;
const SelectedImgListContainer = styled.div`
    width: calc(100% - 5rem);
    min-height: 23.28rem;
    max-height: 35rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.5rem;
    gap: 1.5rem;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 1024px) {
        max-height: 30rem;
    };
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 35rem;
    };
`;
const ImageWrapper = styled.div`
    width: 20.28rem;
    height: 20.28rem;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0.4rem 1.2rem 0 rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 1024px) {
        width: 18rem;
        height: 18rem;
    }
    @media screen and (max-width: 512px) {
        width: 100%;
        height: 20rem;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    flex-shrink: 0;
`;

export default function FileImageInputWrapper01() {
    const fileRef = useRef(null);
    const handleFileClick = () => {
        fileRef.current.click();
    };
    const handleFileChange = (e) => {
        // const files = e.target.files;
        // const imagesArr = [];
        // // console.log(files);
        // for (let i = 0; i < files.length; i++) {
        //     console.log(files[i].name);
        //     imagesArr.push(files[i].name);
        // }
        // console.log(imagesArr);

        // const files = e.target.files;
        // const imagesArr = [];

        // for (let i = 0; i < files.length; i++) {
        //     imagesArr.push(URL.createObjectURL(files[i])); // 파일의 경로를 사용하여 이미지를 표시할 수 있도록 수정
        // }
        // console.log(imagesArr);

    };
    return (
        <FileImageInputWrapper>
            <AddBtnContainer onClick={handleFileClick}>
                <AddBtnIcon src="/icons/icon_plus.svg"></AddBtnIcon>
                <HideInput
                    type="file"
                    ref={fileRef}
                    multiple="multiple"
                    onChange={handleFileChange}
                ></HideInput>
            </AddBtnContainer>
            <SelectedImgListContainer>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
                <ImageWrapper>
                    <Image src="/images/house1.jpeg"></Image>
                </ImageWrapper>
            </SelectedImgListContainer>
        </FileImageInputWrapper>
    )
}