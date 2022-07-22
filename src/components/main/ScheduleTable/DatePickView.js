import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import DailyTable from "./DailyTable";

const DatePickView = () => {

    const { totalData, inputs, clickDay, setTotalData } = useContext(MainContext);


    console.log('DatePickView inputs : ',inputs);

    useEffect(() => {

        setTotalData(
            // 선택한 날짜 === totalData의 날짜 같으면, 아래 실행
            totalData.find(data => data.date === clickDay.YMD) ?
                //기존에 있던걸 변경할 때 = date 가 같은걸 찾았을 때 있는경우
                totalData.map(data => data.date === clickDay.YMD ?
                    {
                        ...data,
                        "list":
                        data["list"].find(item => item.code === inputs.code) ?
                        data["list"].map(item => item.code === inputs.code ?
                            {
                                ...item,
                                "code": inputs.code,
                                "content": inputs.content
                            }
                            :
                            item
                        )
                        :
                        [
                            ...data["list"],
                            {
                                "code": inputs.code,
                                "content": inputs.content
                            }
                        ]
                    }
                    : data
                )
            :
            // totalData에 선택한 날짜가 없을 때,
            // 선택한 날짜의 YMD와 localStorage 내의 date 값이 같은 데이터가 없을 경우
            inputs === [] ?
            [
                ...totalData,
                {
                    "date": clickDay.YMD,
                    "weekDate": clickDay.date,
                    "list": [
                        // inputs
                        // '여긴가..?'
                    ]
                }
            ]
            :
            // data를 작성했을 때
            [
                // ...totalData,
                {
                    "date": clickDay.YMD,
                    "weekDate": clickDay.date,
                    "list": [
                        inputs
                    ]
                }
            ]
        )

    }, [inputs])

    
    return (
        <>
            <div className="today_warp">
                <h5>Morning</h5>
                <div>
                    <DailyTable typeNum="m1"></DailyTable>
                    <DailyTable typeNum="m2"></DailyTable>
                </div>
            </div>
            <div className="today_warp">
                <h5>Afternoon</h5>
                <div>
                    <DailyTable typeNum="a1"></DailyTable>
                    <DailyTable typeNum="a2"></DailyTable>
                </div>
            </div>
            <div className="today_warp">
                <h5>Dinner</h5>
                <div>
                    <DailyTable typeNum="d1"></DailyTable>
                    <DailyTable typeNum="d2"></DailyTable>
                </div>
            </div>
        </>
    )
}

export default DatePickView;
