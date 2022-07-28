import { Eventcalendar } from "@mobiscroll/react";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { el } from "react-date-range/dist/locale";
import { MainContext } from "../../../contexts/MainContext";
import { DailyStyle } from "../../../styles/MainStyle";



const DailyTable = ({ typeNum }) => {

    const {
        clickDay, inputs, setInputs, setDayDataInLocal, dayDataInLocal,
        daylistTransform, setDaylistTransform, totalData, setTotalData,
        dayState, setDayState
    } = useContext(MainContext);
    
    const [textareaValue, setTextareaValue] = useState('');
    const [inputValue, setInputValue] = useState("");
    const [isButtonState, setIsButtonState] = useState(false);


    // textarea input Event
    const InputData = (e) => {
        const { name, value } = e.target;
        setInputValue(value);
    }


    // 수정완료 Submit Event
    const onSubmit = (e) => {
        e.preventDefault();
        setIsButtonState(!isButtonState);
        setDaylistTransform(!daylistTransform);
        
        if(dayState && inputValue){
            // 하루 단위 
            setDayState(
                {
                    ...dayState,
                    list:
                    dayState.list.length === 0 ?
                    [
                        {
                            code: typeNum,
                            content: inputValue
                        }
                    ]
                    :
                    dayState.list.find(type => type.code === typeNum) ?
                    //존재하는 코드인 경우 list 안에서 찾기
                    dayState.list.map(type => type.code === typeNum ?
                        {
                            ...type,
                            content: inputValue
                        }
                        : type)
                    : //존재하지 않는 코드의 경우 list 새로 생성
                    [
                        ...dayState.list,
                        {
                            code: typeNum,
                            content: inputValue
                        }
                    ]
                }
            )


            // 날짜별 전체 데이터 대입
            totalData.map(el => el.YMD === clickDay.YMD && (
                setTotalData([
                    {
                        ...el,
                        list :
                        el.list.length === 0 ?
                        [
                            {
                                code: typeNum,
                                content: inputValue
                            }
                        ]
                        :
                        el.list.find(type => type.code === typeNum) ?
                        //존재하는 코드인 경우 list 안에서 찾기
                        el.list.map(type => type.code === typeNum ?                            
                            {
                                ...type,
                                content: inputValue
                            }
                            : type)
                        : //존재하지 않는 코드의 경우 list 새로 생성
                        [
                            ...el.list,
                            {
                                code: typeNum,
                                content: inputValue
                            }
                        ]
                    }
                ])
            ))  
        }
    }
    

    // 수정 Button Event
    const onClick = (e) => {
        e.preventDefault();
        setIsButtonState(!isButtonState);
    }

    // 성공 button event
    const successBtn = (e) => {
        e.preventDefault();
    }


    // 날짜 클릭시 해당 data 출력
    useEffect(() => {
        // console.log('total',totalData);
        // setDayState([])
        setInputValue("")
        
        console.log('dayState',dayState);
    }, [daylistTransform]);
    
    useEffect(() => {
        // dayState !== [] ||
        // setTotalData(...totalData,[dayState])
        dayState.length > 0 && dayState.list.length &&
        dayState.list.map(con => console.log('con',con.content))
    }, [daylistTransform]);



    return (
        <DailyStyle notUse={isButtonState}>
            <form onSubmit={onSubmit}>
                <div>
                    {
                        isButtonState ? (
                            <textarea
                                onChange={InputData}
                                value={inputValue}
                                name={typeNum}
                            />
                        ) : (
                            <textarea
                                value={
                                    
                                    textareaValue
                                }
                                name={typeNum}
                                disabled
                            />
                        )
                    }
                </div>
                <div>
                    <button onClick={successBtn}>Success</button>
                    {
                        isButtonState ? (
                            <button>OK</button>
                            ) : (
                            <button onClick={onClick}>Edit</button>
                        )
                    }
                </div>
            </form>
            
        </DailyStyle>
    )
}

export default DailyTable;
