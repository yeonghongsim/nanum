import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
    user: userSlice.reducer,
})
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['user']
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
});

export default store;