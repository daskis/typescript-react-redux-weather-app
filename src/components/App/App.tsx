import AppWrapper from "../AppWrapper/AppWrapper"
import {useEffect, useState} from "react";
import {fetchTemp} from "../../store/slices/tempSlice";
import {useDispatch, useSelector} from "react-redux";
import {changeBg, changeColor} from "../../store/slices/backgroundSlice";
import {RootState} from "../../store";

function App() {
    // @ts-ignore
    const currentWeather = useSelector(state => state.temp.temp?.current);
    const dispatch = useDispatch()
    const bg = useSelector((state: RootState) => state.bg?.bg)
    useEffect(() => {
        if (currentWeather?.condition?.text) {
            if (new Date().getHours() < 19 || new Date().getHours() > 5) {
                if (window.innerWidth < 769) {
                    switch (currentWeather.condition.text) {
                        case "Солнечно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_clear.jpg?alt=media"));
                            break;
                        case "Ясно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_clear.jpg?alt=media"));
                            break;
                        case "Переменная облачность":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_cloud.jpg?alt=media"));
                            break;
                        case "Облачно":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_cloud.jpg?alt=media"));
                            break;
                        case "Пасмурно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunderstorm.jpg?alt=media"));
                            break;
                        case "Дымка":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_fog.jpg?alt=media"));
                            break;
                        case "Местами дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Местами снег":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами дождь со снегом":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами замерзающая морось":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами грозы":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunder.jpg?alt=media"));
                            break;
                        case "Поземок":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowdrift.jpg?alt=media"));
                            break;
                        case "Метель":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowdrift.jpg?alt=media"));
                            break;
                        case "Туман":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_fog.jpg?alt=media"));
                            break;
                        case "Переохлажденный туман":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_fog.jpg?alt=media"));
                            break;
                        case "Местами слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Сильная замерзающая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Местами небольшой дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Временами умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Временами сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Слабый переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный снег":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Ледяной дождь":
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Сильные ливни":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rain.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренные или сильные ливневые дожди со снегом":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_rainsnow.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunder.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunder.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunder.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmd_thunder.jpg?alt=media"));
                            break;
                    }


                }
                else {
                    switch (currentWeather.condition.text) {
                        case "Солнечно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_clear.jpg?alt=media"));
                            break;
                        case "Ясно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_clear.jpg?alt=media"));
                            break;
                        case "Переменная облачность":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_cloud.jpg?alt=media"));
                            break;
                        case "Облачно":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_cloud.jpg?alt=media"));
                            break;
                        case "Пасмурно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunderstorm.jpg?alt=media"));
                            break;
                        case "Дымка":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_fog.jpg?alt=media"));
                            break;
                        case "Местами дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Местами снег":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами дождь со снегом":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами замерзающая морось":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами грозы":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunder.jpg?alt=media"));
                            break;
                        case "Поземок":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_fog.jpg?alt=media"));
                            break;
                        case "Метель":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fdw_clear.jpg?alt=media"));
                            break;
                        case "Туман":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_fog.jpg?alt=media"));
                            break;
                        case "Переохлажденный туман":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_fog.jpg?alt=media"));
                            break;
                        case "Местами слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Сильная замерзающая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Местами небольшой дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Временами умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Временами сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Слабый переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Умеренный снег":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Местами сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Ледяной дождь":
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Сильные ливни":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренные или сильные ливневые дожди со снегом":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_rainfall.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fd_thunderstorm.jpg?alt=media"));
                            break;
                    }
                }
            }
            else {
                if (window.innerWidth < 769) {
                    switch (currentWeather.condition.text) {
                        case "Солнечно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_clear.jpg?alt=media"));
                            break;
                        case "Ясно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_clear.jpg?alt=media"));
                            break;
                        case "Переменная облачность":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_cloud.jpg?alt=media"));
                            break;
                        case "Облачно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_cloud.jpg?alt=media"));
                            break;
                        case "Пасмурно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_cloud.jpg?alt=media"));
                            break;
                        case "Дымка":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_cloud.jpg?alt=media"));
                            break;
                        case "Местами дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Местами снег":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами дождь со снегом":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами замерзающая морось":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Местами грозы":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_thunderstorm.jpg?alt=media"));
                            break;
                        case "Поземок":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_snowfall.jpg?alt=media"));
                            break;
                        case "Метель":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_snowfall.jpg?alt=media"));
                            break;
                        case "Туман":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_fog.jpg?alt=media"));
                            break;
                        case "Переохлажденный туман":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_fog.jpg?alt=media"));
                            break;
                        case "Местами слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_fog.jpg?alt=media"));
                            break;
                        case "Слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Сильная замерзающая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Местами небольшой дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Временами умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Временами сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Слабый переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_snowfall.jpg?alt=media"));
                            break;
                        case "Местами сильный снег":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_snowfall.jpg?alt=media"));
                            break;
                        case "Сильный снег":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_snowfall.jpg?alt=media"));
                            break;
                        case "Ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Сильные ливни":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренные или сильные ливневые дожди со снегом":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Небольшой снег":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный снег":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rainsnow.jpg?alt=media"));
                            break;
                        case "Небольшой ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_rain.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fmn_thunderstorm.jpg?alt=media"));
                            break;
                    }


                }
                else {
                    switch (currentWeather.condition.text) {
                        case "Солнечно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_clear.jpg?alt=media"));
                            break;
                        case "Ясно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_clear.jpg?alt=media"));
                            break;
                        case "Переменная облачность":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_cloud.jpg?alt=media"));
                            break;
                        case "Облачно":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_cloud.jpg?alt=media"));
                            break;
                        case "Пасмурно":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_cloud.jpg?alt=media"));
                            break;
                        case "Дымка":
                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_fog.jpg?alt=media"));
                            break;
                        case "Местами дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Местами снег":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Местами дождь со снегом":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами замерзающая морось":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainsnow.jpg?alt=media"));
                            break;
                        case "Местами грозы":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_thunderstorm.jpg?alt=media"));
                            break;
                        case "Поземок":
                            dispatch(changeColor("black"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_fog.jpg?alt=media"));
                            break;
                        case "Метель":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Туман":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_fog.jpg?alt=media"));
                            break;
                        case "Переохлажденный туман":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_fog.jpg?alt=media"));
                            break;
                        case "Местами слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Слабая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Сильная замерзающая морось":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Местами небольшой дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Небольшой дождь":
                            dispatch(changeColor("white"))

                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Временами умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Временами сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Сильный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Слабый переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный переохлажденный дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Небольшой дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainsnow.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Местами небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Местами умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Умеренный снег":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Местами сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fnw_clear.jpg?alt=media"));
                            break;
                        case "Сильный снег":

                            dispatch(changeColor("black"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fnw_clear.jpg?alt=media"));
                            break;
                        case "Ледяной дождь":
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rain.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ливневый дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Сильные ливни":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Небольшой ливневый дождь со снегом":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренные или сильные ливневые дожди со снегом":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный снег":

                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_snowfall.jpg?alt=media"));
                            break;
                        case "Небольшой ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "Умеренный или сильный ледяной дождь":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_rainfall.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный дождь с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах местами небольшой снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_thunderstorm.jpg?alt=media"));
                            break;
                        case "В отдельных районах умеренный или сильный снег с грозой":
                            dispatch(changeColor("white"))
                            dispatch(changeBg("https://firebasestorage.googleapis.com/v0/b/react-weather-app-20b76.appspot.com/o/backrounds%2Fn_thunderstorm.jpg?alt=media"));
                            break;
                    }
                }
            }
        }
    }, [currentWeather])
    // @ts-ignore
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
            }}
            className={`text-3xl overflow-y-hidden relative flex flex-col justify-between h-[100vh] bg-cover bg-center relative`}>
            <AppWrapper/>
        </div>
    )
}

export default App
