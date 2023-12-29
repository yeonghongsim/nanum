import styled from "styled-components"
import HomePageItemListCard from "./HomePageItemListCard";

const ItemListContainer = styled.div`
    width : 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 1rem
`;

export default function HomePageItemListCardContainer({ itemList, ...props }) {
    console.log(itemList);
    return (
        <ItemListContainer>
            {
                itemList.map((item) => (
                    <HomePageItemListCard item={item}></HomePageItemListCard>
                    // <CardContainer key={item._id}>
                    //     <CardImgContainer>
                    //         <CardImgWrapper>
                    //             {
                    //                 item.imageList.map((image, index) => (
                    //                     <Img
                    //                         key={index}
                    //                         src={image.fileUrl}
                    //                         alt={image.fileName}
                    //                         onClick={() => handleItemId(item._id)}
                    //                     ></Img>
                    //                 ))
                    //             }
                    //         </CardImgWrapper>
                    //     </CardImgContainer>
                    //     <CardInfoContainer>
                    //         <TextCardName>{item.itemName}</TextCardName>
                    //         <TextCardAddress>{item.locate}</TextCardAddress>
                    //     </CardInfoContainer>
                    // </CardContainer>
                ))
            }
        </ItemListContainer>
    )
}