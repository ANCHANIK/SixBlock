import { useState } from "react";
import { MainScheduleStyle } from "../../styles/MainStyle";
import SchedulesTable from "./SchedulesTable";
import SelectDate from "./SelectDate";


const MainSchedules = () => {

    return (
        <MainScheduleStyle>

            <SelectDate />

            <SchedulesTable />

        </MainScheduleStyle>
    )
}

export default MainSchedules;
