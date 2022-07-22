import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { DailyStyle } from "../../../styles/MainStyle";



const DailyTable = ({ typeNum }) => {

    const {
        clickDay, inputs, setInputs,
        dayDataInSession,
        daylistTransform, setDaylistTransform
    } = useContext(MainContext);
    
    const [inputValue, setInputValue] = useState();
    const [arrValue, setArrValue] = useState([]);
    const [notUse, setNotUse] = useState(false);
    const [textEdit, setTextEdit] = useState('Edit');

    console.log('DailyTable inputs : ',inputs);

    // textarea input Event
    const InputData = (e) => {
        const { name, value } = e.target;
        setInputValue(value);
    }
    
    // Click Event
    const EditGoal = (TN) => {
        setNotUse((current) => !current);
        setDaylistTransform((current) => !current)
        if (notUse) {
            !inputValue ||
            setInputs(
                {
                    'code': TN,
                    'content': inputValue
                }
            )
        }
    }

    // edit 버튼 state에 따른 버튼 Edit || OK  변화
    useEffect(() => {notUse ? setTextEdit('OK'):setTextEdit('Edit')},[notUse])

    
    // 날짜 클릭시 해당 data 출력
    useEffect(() => {
        setNotUse(false);
        setArrValue([]);
        
        console.log('clickDay',clickDay)
        dayDataInSession !== null ? (
            dayDataInSession.find(date => date.date === clickDay.YMD ? (
                // dayDataInLocal.date === 선택한 날짜가 같으면 실행
                setArrValue(date.list),
                console.log('ArrValue',date.list),
                console.log('dayDataInSession',dayDataInSession),
                console.log('찾음'),
                console.log('notUse',notUse)

                ) : (
                    // 다른 날짜 선택
                setArrValue([]),
                console.log('못찾음'),
                console.log('arrValue못찾',arrValue)
                // setDayDataInLocal(totalData),
                // setDayDataInSession(totalData)
            ))
        ) : (
            // 데이터 없음
            console.log('데이터 없음')
            // setDayDataInLocal(totalData),
            // setDayDataInSession(totalData)
        )

    }, [clickDay]);


    return (
        <DailyStyle notUse={notUse}>

            <div>
                {
                    notUse ? (
                        <textarea
                            onChange={InputData}
                            value={inputValue}
                            name={typeNum}
                        />
                    ) : (
                        <textarea
                        value={
                            arrValue === [] ? (
                                ''
                            ) : (
                                arrValue.find(val => val.code === typeNum && (
                                    arrValue.content
                                ))
                            )
                        }
                        disabled />
                    )
                }
            </div>
            <div>
                <button>Success</button>
                <button onClick={() => EditGoal(typeNum)}>{textEdit}</button>
            </div>
            
        </DailyStyle>
    )
}

export default DailyTable;
