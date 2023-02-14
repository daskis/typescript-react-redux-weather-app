import React, {Fragment} from 'react';
import AppCarouselList from "./AppCarouselList/AppCarouselList";
import {useSwipeable} from "react-swipeable";
import {useDispatch, useSelector} from "react-redux";
import {changeModal} from "../../store/slices/modalSlice";
import AppMoreInfo from "../AppMoreInfo/AppMoreInfo";
import {RootState} from "../../store";

const AppCarousel = () => {

    // @ts-ignore
    const isOpen = useSelector(state => state.modal.isOpen)
    const dispatch = useDispatch()
    const handlers = useSwipeable({
        onSwipedUp: eventData => {
            dispatch(changeModal(true))
        },
        onSwipedDown: eventData => {
            dispatch(changeModal(false))
        }
    });
    const correctTemp = useSelector((state: RootState) => state.temp.temp)
    return (
        <div>
            <div className="block md:hidden">
                <div className={isOpen
                    ? "flex flex-col gap-2 text-center border-t-2 transition-all rounded-t-3xl bg-white pt-1 pb-4 absolute" +
                    " bottom-0 " +
                    "right-0  w-full"
                    : "flex flex-col gap-2 text-center border-t-2 transition-all rounded-t-3xl bg-white pt-1 pb-4 absolute" +
                    " -bottom-[370px] xs:-bottom-[390px] xs+:-bottom-[400px]" +
                    " left-0" +
                    " right-0 w-full"}>
                    <button {...handlers}
                            className="w-full bg-black h-[30px] bg-transparent flex justify-center items-center">
                        <div className="w-[60px] h-[3px] bg-[#dfdfdf]"></div>
                    </button>
                    {correctTemp
                        ?
                        <>
                            <h3 className="text-xl font-bold">Погода на сегодня</h3>
                            <AppCarouselList/>
                            <AppMoreInfo/>
                        </>
                        :
                        <h3 className="text-xl font-bold">Город не выбран</h3>
                    }
                </div>
            </div>
            <div className="hidden md:block">

                {correctTemp
                    ?
                    <div className="py-4">
                        <h3 className="text-xl font-bold">Погода на сегодня</h3>
                        <AppCarouselList/>
                        <AppMoreInfo/>
                    </div>
                    :
                    <h3 className="text-xl font-bold">Город не выбран</h3>
                }
            </div>
        </div>

    )
        ;
};

export default AppCarousel;
