import React, {useEffect, useRef, useState} from 'react';
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "../../store/slices/adressSlice";
import {fetchTemp} from "../../store/slices/tempSlice";
import {AppDispatch, RootState} from "../../store";

const AppSidebar = () => {
    const dispatch: AppDispatch = useDispatch()
    const temp = useSelector((state: RootState) => state.temp.temp)
    const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
    useEffect(() => {
        dispatch(changeValue(value))
        if (value?.data.geo_lon && value.data.geo_lat) {
            dispatch(fetchTemp([(+value.data.geo_lat).toFixed(4), (+value.data.geo_lon).toFixed(4)]))
        }
    }, [value])
    useEffect(() => {
        console.log(temp)
    }, [temp]);

    return (
       <div>
           <p className="text-lg py-2">Выберите город</p>
           <AddressSuggestions count={6} token="bebc2448d3ef84950aba6a38c99f5c558dd429be" value={value} onChange={setValue}/>
       </div>
)

};

export default AppSidebar;
