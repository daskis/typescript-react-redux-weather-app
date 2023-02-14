import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
//@ts-ignore


const initialState = {
    temp: {},
} as tempState
// @ts-ignore
// @ts-ignore
// @ts-ignore
export const fetchTemp = createAsyncThunk(
    `temp/fetchTemp`,
    async ([lat, lon]:any) => {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=94d5a24671ef4f44ac413930232901&q=${lat},${lon}&days=1&aqi=yes&alerts=yes&lang=ru
`);
        return (await response.json())
    }
)
export interface tempState{
    temp: {
        location: {
            name: string
        },
        current: {
            temp_c: number,
            condition: {
                text: string
            },
            feelslike_c: number,
            pressure_mb: number,
            wind_kph: number,
            humidity: number
        },

    } ,
}
// @ts-ignore
const tempSlice = createSlice({
    name: "temp",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTemp.fulfilled, (state, action) => {
                // @ts-ignore
                state.temp = action.payload
                // @ts-ignore
            })

    }

})
export default tempSlice.reducer