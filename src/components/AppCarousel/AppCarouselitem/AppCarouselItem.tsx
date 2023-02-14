import React from 'react';
import dClear from "../../../assets/icons/d_clear.svg"
// @ts-ignore
const AppCarouselItem = ({temp_c, time, icon}) => {
    const date = new Date(time)
    const getFirst = () => {
        if (date.getHours() < 10) {
            return "0"
        }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={icon} alt=""/>
            <p className="text-sm xs+:text-base opacity-60">{getFirst()}{date.getHours()}:00</p>
            <h6 className="text-lg xs+:text-2xl font-semibold">{temp_c.toFixed(0)}°</h6>
        </div>
    );
};

export default AppCarouselItem;
