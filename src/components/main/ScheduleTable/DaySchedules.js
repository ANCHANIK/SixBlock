import { useContext, useEffect, useState } from "react";
import DatePickView from "./DatePickView";
import { MainContext } from "../../../contexts/MainContext";
import { Calendar } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



const DaySchedules = () => {

    const { inputs, totalData, setClickDay, setDaylistTransform } = useContext(MainContext);
    const [locale, setLocale] = useState('us');

    
    const onDateClick = (e) => {
        // select date
        let selectYear = e.getFullYear();
        let selectMonth = ("0" + (1 + e.getMonth())).slice(-2);
        let selectDay = ("0" + e.getDate()).slice(-2);
        
        const selectDate = e.toDateString().substr(0, 3);
        const selectYMD = selectYear+selectMonth+selectDay;
        setClickDay({
            date: selectDate,
            YMD: selectYMD
        });
        
        setDaylistTransform((current) => !current);
    }

    console.log('DaySchedules inputs : ',inputs);
    
    // localStorage, sessionStorage 저장
    useEffect(() => {
        // setDayDataInLocal(totalData)
        // setDayDataInSession(totalData)
        console.log('바로?');
    }, [totalData])


    return (
        <>
            <div className="custom_calendar">
                <Calendar
                    onChange={onDateClick}
                    locale={locales[locale]}
                    showMonthArrow={false}
                    direction="horizontal"

                    // date={date}
                    // displayMode={1}
                    // startDate={date}
                    // weekdayDisplayFormat='' // 일 월 화 수 목 금 토
                />
            </div>
            <DatePickView />
            
        </>
    )
}

export default DaySchedules;
