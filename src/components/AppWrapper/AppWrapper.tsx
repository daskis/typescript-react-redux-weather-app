import React, {useEffect} from 'react';
import AppInfo from "../AppInfo/AppInfo.js";
import AppCarousel from "../AppCarousel/AppCarousel.js";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
const AppWrapper = () => {
    return (
        <div>
            <AppInfo/>
            <div className="block md:hidden">
                <AppCarousel/>
            </div>
        </div>
    );
};

export default AppWrapper;