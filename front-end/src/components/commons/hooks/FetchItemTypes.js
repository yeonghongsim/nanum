import axios from "axios";

export const fetchItemTypes = async () => {
    try {
        const response = await axios.get('http://localhost:8080/itemType');
        const itemTypeArray = response.data;
        return itemTypeArray;
    } catch (error) {
        console.error('Error getting itemType data:', error);
        throw error;
    }
};
