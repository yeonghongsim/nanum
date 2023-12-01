import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id: '',
    userId: '',
    userPassword: '',
    userName: '',
    birthday: '',
    phoneNumber: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.birthday = action.payload.birthday;
            state.phoneNumber = action.payload.phoneNumber;
        },
        logoutUser: (state) => {
            return {};
        },
    },
});
export const { setUser, logoutUser } = userSlice.actions;
export default userSlice;