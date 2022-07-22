import { createContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { UseSessionStorage } from "../hooks/UseSessionStorage";

export const MainContext = createContext();

const MainProvider = (props) => {
    
    
    // 추가되는 데이터 push 하여 localStorage에 추가
    const [totalData, setTotalData] = useState([]);
    
    // today default value
    const today = new Date();
    const todayYMD = today.toISOString().substring(0, 10).replace(/-/g, '');
    const todayDate = today.toDateString().substr(0, 3);
    const [clickDay, setClickDay] = useState({
        date: todayDate,
        YMD: todayYMD
    });
    
    // 메인 Day,Week,Month 상태관리
    const [selectDate, setSelectDate] = useState('Day');
    const [inputs, setInputs] = useState([]);
    
    // Day Data 변경 체크
    const [ daylistTransform, setDaylistTransform ] = useState(false)
   
    // Day Data localStorage 저장
    const [ dayDataInLocal , setDayDataInLocal] = useLocalStorage('dayTotalData', null);
    // Day Data sessionStorage 저장
    const [ dayDataInSession, setDayDataInSession ] = UseSessionStorage('dayTotalData',null);


    const value = useMemo(
        () => ({
            selectDate, setSelectDate, clickDay, setClickDay,
            inputs, setInputs, totalData, setTotalData,
            dayDataInLocal , setDayDataInLocal,
            dayDataInSession, setDayDataInSession,
            daylistTransform, setDaylistTransform
            // getTotalData, setGetTotalData,

        }),
        [
            selectDate, setSelectDate, clickDay, setClickDay,
            inputs, setInputs, totalData, setTotalData,
            dayDataInLocal , setDayDataInLocal,
            dayDataInSession, setDayDataInSession,
            daylistTransform, setDaylistTransform
            // getTotalData, setGetTotalData,
        ]
    )




    return (
        <MainContext.Provider value={value}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainProvider;