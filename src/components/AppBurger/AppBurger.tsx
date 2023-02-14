import React, {useState} from 'react';
import AppSidebar from "../AppSidebar/AppSidebar";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import AppCarousel from "../AppCarousel/AppCarousel";

const AppBurger = () => {
    const [opened, setOpened] = useState(false);
    const color = useSelector((state: RootState) => state.bg.color)
    return (
        <>
            <div
                onClick={() => setOpened(!opened)}
                className={!opened
                    ? `tham tham-e-squeeze tham-w-6 xs+:tham-w-8 relative pt-4 z-30`
                    : `tham-active tham tham-e-squeeze tham-w-6 xs+:tham-w-8 pt-4 relative z-30`}
            >
                <div className="tham-box ">
                    <div className={color === "white" ? "tham-inner bg-white" : "tham-inner bg-black"} />
                </div>
            </div>
            {opened &&
	            <div className="absolute top-0 right-0 bottom-0 px-8 py-20 transition w-full md:w-[60vw] h-full bg-gray-200 z-20">
                    <AppSidebar/>
                    <div className="hidden md:block">
                        <AppCarousel/>
                    </div>
	            </div>
            }

        </>
    );
};

export default AppBurger;
