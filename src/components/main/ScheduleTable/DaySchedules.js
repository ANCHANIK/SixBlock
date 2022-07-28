import { useContext, useEffect, useState } from "react";
import DatePickView from "./DatePickView";
import { MainContext } from "../../../contexts/MainContext";
import { Calendar } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



const DaySchedules = () => {

    const { clickDay, setClickDay, daylistTransform, setDayDataInLocal,
        setDaylistTransform, setDayState } = useContext(MainContext);
    const [locale, setLocale] = useState('us');
    
        
    // today default value
    useEffect(()=>{
        setDayState([clickDay]);
    },[])

    const onDateClick = (e) => {
        // select date
        let selectYear = e.getFullYear();
        let selectMonth = ("0" + (1 + e.getMonth())).slice(-2);
        let selectDay = ("0" + e.getDate()).slice(-2);
        
        const selectDate = e.toDateString().substr(0, 3);
        const selectYMD = selectYear+selectMonth+selectDay;

        e &&
        setClickDay({
            date: selectDate,
            YMD: selectYMD,
        })
        
        let selDate = {
            date: selectDate,
            YMD: selectYMD,
            list: []
        }

        setDaylistTransform(!daylistTransform);
        setDayState(selDate);
    }


    return (
        <>
            <div className="custom_calendar">
                <Calendar
                    onChange={onDateClick}
                    locale={locales[locale]}
                    showMonthArrow={false}
                    direction="horizontal"
                />
            </div>
            <DatePickView />
        </>
    )
}

export default DaySchedules;
