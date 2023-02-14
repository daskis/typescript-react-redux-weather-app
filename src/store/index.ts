import {configureStore} from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import adressSlice from "./slices/adressSlice";
import tempSlice from "./slices/tempSlice";
import backgroundSlice from "./slices/backgroundSlice";

const store =  configureStore({
    reducer: {
        modal: modalSlice,
        adress: adressSlice,
        temp: tempSlice,
        bg: backgroundSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
