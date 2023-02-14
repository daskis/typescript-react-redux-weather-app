import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import AppCarouselItem from "../AppCarouselitem/AppCarouselItem";
import {useSelector} from "react-redux";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {RootState} from "../../../store";
import {tempState} from "../../../store/slices/tempSlice";
import {useEffect, useState} from "react";

interface forecastState {
    time_epoch: number,
    temp_c: number,
    time: string,
    condition: {
        icon: string
    }

}

const AppCarouselList = () => {
    // @ts-ignore
    const countDays = useSelector((state: RootState) => state.temp.temp?.forecast?.forecastday[0].hour)
    const [slidesCount, setSlicecCount] = useState<number>(0)
    useEffect(() => {
        if (window.innerWidth < 430) {
            setSlicecCount(4)
        }
        if (window.innerWidth > 430 && window.innerWidth < 840) {
            setSlicecCount(5)
        }
        if (window.innerWidth > 840) {
            setSlicecCount(6)
        }
    })
    return (
        <div className="px-2">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                slidesPerView={slidesCount}
            >
                {countDays && countDays.map((item:forecastState) => {
                    return (
                        <SwiperSlide key={item.time_epoch}>
                            <AppCarouselItem temp_c={item.temp_c} time={item.time} icon={item.condition.icon}/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
};

export default AppCarouselList;
