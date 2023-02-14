import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    isOpen: false
}
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        changeModal: (state, action) => {
            state.isOpen = action.payload
        },
    }
})
export const {changeModal} = modalSlice.actions
export default modalSlice.reducer