import React, {useEffect} from 'react';
import location from "../../assets/icons/location.svg"
import AppBurger from "../AppBurger/AppBurger";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const AppInfo = () => {
    const locationName = useSelector((state: RootState) => state.temp.temp);
    const currentWeather = useSelector((state: RootState) => state.temp.temp);
    const color = useSelector((state: RootState) => state.bg.color)
    return (
        <div className="flex justify-between px-4 py-8 md:px-8 md:py-12">
            <div className="flex flex-col gap-4">
                {locationName.location?.name &&
                    <div className="flex gap-2">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-4" style={{fill: color}}
                             viewBox="0 0 24 32">
                            <path
                                d="M12 0c-6.617 0-12 5.394-12 12.022 0 9.927 11.201 19.459 11.678 19.86 0.093 0.079 0.208 0.118 0.322 0.118s0.226-0.038 0.318-0.114c0.477-0.394 11.682-9.762 11.682-19.864 0-6.628-5.383-12.022-12-12.022zM12.002 30.838c-1.841-1.645-11.002-10.259-11.002-18.816 0-6.078 4.935-11.022 11-11.022s11 4.944 11 11.022c0 8.702-9.152 17.193-10.998 18.816zM12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
                        </svg>
                        <p className="text-[16px] xs+:text-2xl" style={{
                            color: color
                        }}>{locationName.location?.name}</p>
                    </div>
                }
                <h1 style={{color: color}} className={currentWeather.current
                    ? "text-7xl xs+:text-9xl  font-semibold leading-auto"
                    : "text-2xl xs+:text-3xl pt-2 leading-[18px]"}>{currentWeather.current ? (+currentWeather?.current?.temp_c).toFixed(0) + "°" : "Выберите" +
                    " город"}</h1>
                <p style={{color: color}} className="text-lg xs+:text-xl">{currentWeather ? currentWeather?.current?.condition.text : ""}</p>

            </div>
            <AppBurger/>
        </div>

    );
};

export default AppInfo;
