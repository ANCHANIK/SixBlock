import { useState } from "react";
import { MonthlyTableStyle } from "../../../styles/MainStyle";
import { Calendar } from "react-date-range";
import * as locales from 'react-date-range/dist/locale';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import MonthLibrary from "./MonthLibrary";

const MonthSchedules = () => {

    const [locale, setLocale] = useState('us');


    return (
        <>
            <div className="custom_calendar">
                <Calendar
                    // onChange={onDateClick}
                    locale={locales[locale]}
                    showMonthArrow={false}
                    direction="horizontal"

                    // date={date}
                    // displayMode={1}
                    // startDate={date}
                    // weekdayDisplayFormat='' // 일 월 화 수 목 금 토
                />
            </div>
        </>
    )
}

export default MonthSchedules;
