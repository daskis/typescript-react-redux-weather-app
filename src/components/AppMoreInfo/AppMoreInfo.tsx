import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../store";

interface dateInterface {
    hours: number,
    minutes: number
}
const AppMoreInfo = () => {
    const [date, setDate] = useState<dateInterface>({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
    })
    const moreInfo = useSelector((state: RootState) => state.temp.temp?.current)
    return (
        <div className={"flex flex-col gap-4 px-4"}>
            <p className="text-sm font-semibold flex justify-between">Температура: <span>
                {moreInfo && moreInfo.temp_c}°
            </span></p>
            <p className="text-sm font-semibold flex justify-between">Температура по ощущению: <span>
                {moreInfo && moreInfo.feelslike_c}°
            </span></p>
            <p className="text-sm font-semibold flex justify-between">Скорость ветра: <span>
                {moreInfo && moreInfo.wind_kph} км/ч
            </span></p>
            <p className="text-sm font-semibold flex justify-between">Давление: <span>
                {moreInfo && moreInfo.pressure_mb} мбар
            </span></p>
            <p className="text-sm font-semibold flex justify-between">Влажность: <span>
                 {moreInfo && moreInfo.humidity} %
            </span></p>
            <p className="text-sm font-semibold flex justify-between">Текущее время: <span>
                 {`${date.hours}:${date.minutes}`}
            </span></p>
        </div>
    );
};

export default AppMoreInfo;
