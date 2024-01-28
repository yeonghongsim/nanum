import styled from "styled-components"
import { COLORS } from "../../../../commons/styles/COLORS";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: ${(props) => (props.isOn ? 'flex' : 'none')};
    // display: flex;
    align-items: center;
    justify-content: center;
`;
const Content = styled.div`
    width: 80rem;
    height: 6rem;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
`;
const ConfirmText = styled.h1`
    font-weight: bold;
    font-size: 2rem;
`;
const TextContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const BtnContainer = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
`;
const BtnDiv = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.6rem;
    font-weight: normal;
    background-color : ${(props) => (props.confirm === 'true' ? COLORS.loginColor : COLORS.middlegrayColor)};
    &:hover {
        cursor: pointer;
    }
`;

export default function DeleteItemModal({ props, isDeleteModalOpen, setIsDeleteModalOpen, itemId }) {
    const handleModalClose = () => {
        setIsDeleteModalOpen(false);
    };
    const handleDeleteItem = async () => {
        try {
            console.log('delete item fetch start');
            // 2. http 통신
            const deleteURL = `http://localhost:8080/deleteItem/${itemId}`;
            fetch(deleteURL, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error deleting item data:', error);
        } finally {
            // console.log('delete item fetch end');
            window.location.href = '/itemList';
        }
    };
    return (
        <Wrapper isOn={isDeleteModalOpen}>
            <Content>
                <TextContainer>
                    <ConfirmText>정말로 삭제하시겠습니까?</ConfirmText>
                </TextContainer>
                <BtnContainer>
                    <BtnDiv confirm="false" onClick={handleModalClose}>취소</BtnDiv>
                    <BtnDiv confirm="true" onClick={handleDeleteItem}>확인</BtnDiv>
                </BtnContainer>
            </Content>
        </Wrapper>
    )
}