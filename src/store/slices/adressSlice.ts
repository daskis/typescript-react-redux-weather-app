import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    value: {}
}
const adressSlice = createSlice({
    name: "adress",
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        }
    }
})
export const {changeValue} = adressSlice.actions
export default adressSlice.reducer