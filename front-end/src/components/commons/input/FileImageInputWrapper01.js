import { useRef } from "react";
import styled from "styled-components"
import { COLORS } from "../../../commons/styles/COLORS";

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
const RemoveBtnContainer = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${COLORS.middlegrayColor};
    background-color: white;
    border-radius: 1rem;
    // position: absolute;
    opacity: 0.75;
    transition: all 0.8s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        opacity: 1;
    }
`;
const RemoveBtnIcon = styled.div`
    width: 1.8rem;
    height: 0.6rem;
    // border: 1px solid black;
    background-color: red;
`;
const SelectedImgListContainer = styled.div`
    width: calc(100% - 5rem);
    min-height: 20.28rem;
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
    position: relative;
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

export default function FileImageInputWrapper01(props) {
    const fileRef = useRef(null);
    const [selectedImages, setSelectedImages] = props.imageList;
    // const [selectedImages, setSelectedImages] = useState(props.imageList);

    const handleFileClick = () => {
        fileRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        const newImages = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name;
            const fileUrl = URL.createObjectURL(file);

            // 이미 선택된 파일 이름이 아니라면 추가
            if (!selectedImages.some((selectedImage) => selectedImage.fileName === fileName)) {
                newImages.push({ fileName, fileUrl });
            }
        }
        setSelectedImages((prevImageList) => [...prevImageList, ...newImages]);
    };

    const handleFileRemove = (fileName) => {
        setSelectedImages((prevImageList) =>
            prevImageList.filter((image) => image.fileName !== fileName)
        );
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
                {
                    selectedImages.map((image, index) => (
                        <ImageWrapper key={index}>
                            <Image src={image.fileUrl} alt={image.fileName}></Image>
                            <RemoveBtnContainer onClick={() => (handleFileRemove(image.fileName))}>
                                <RemoveBtnIcon></RemoveBtnIcon>
                            </RemoveBtnContainer>
                        </ImageWrapper>
                    ))
                }
            </SelectedImgListContainer>
        </FileImageInputWrapper>
    )
}