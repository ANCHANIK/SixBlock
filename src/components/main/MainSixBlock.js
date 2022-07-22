import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import CommonHeader from "../../common/CommonHeader"
import SchedulesTable from "./SchedulesTable";

const MainSixBlock = () => {

    return (
        <>
            <CommonHeader></CommonHeader>
            <SchedulesTable></SchedulesTable>
        </>
    )
}

export default MainSixBlock;
