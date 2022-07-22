import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Table } from "../../style/MainStyle"
import DaySchedules from "./ScheduleTable/DaySchedules"
import MonthSchedules from "./ScheduleTable/MonthSchedules";
import WeekSchedules from "./ScheduleTable/WeekSchedules";

const SchedulesTable = () => {

    const { selectDate } = useContext(MainContext);

    return (
        <Table>
            {
                selectDate === "Day" ? <DaySchedules></DaySchedules> :
                selectDate === "Week" ? <WeekSchedules></WeekSchedules> :
                selectDate === "Month" && <MonthSchedules></MonthSchedules>
            }
        </Table>
    )
}

export default SchedulesTable;
