import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    bg: "https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fplaceholder.jpg?alt=media",
    color: "black"
} as bgState
interface bgState {
    bg: string,
    color: string
}
const backgroundSlice = createSlice({
    name: "bg",
    initialState,
    reducers: {
        changeBg: (state, action) => {
            state.bg = action.payload
        },
        changeColor: (state, action) => {
            state.color = action.payload
        }
    }
})
export const {changeBg, changeColor} = backgroundSlice.actions
export default backgroundSlice.reducer