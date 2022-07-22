import styled from "styled-components";
import icoArrowDrop from "../assets/img/ico/ico_arrowDrop.svg"

export const MainScheduleStyle = styled.section`
    margin-top: 25px !important;
    padding: 0 5px !important;
    h5{padding-left: 10px;}
`

export const SelectDateStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    position: relative;
    padding-left: 5px;
    border-bottom: 1px solid #EAEAEA;
    .select_date{
        padding: 5px 10px;
        position: relative;
        font-size: 14px;
        &::after{
            position: absolute;
            left: -10px;
            top: 7px;
            content: "";
            width: 18px;
            height: 18px;
            background: url(${icoArrowDrop}) no-repeat center;
            background-size: contain;
        }
    }
`

export const DropMenu = styled.div`
    display: block;
    position: absolute;
    right: 0;
    top: 30px;
    border: 1px solid #e6e6e6;
    background-color: #fff;
    border-radius: 5px;
    z-index: 9999;
    ul{
        padding: 0;
        li{
            font-size: 12px;
            padding: 7px;
            text-align: center;
        }
    }
`

export const Table = styled.div`
    padding: 0px 0 10px;
    & .today_warp{
        &:not(:first-child){
            margin-top: 15px;
        }
        & > div{
            display: flex;
            margin-top: 5px;
        }
    }
    .custom_calendar{
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        .rdrMonthAndYearWrapper {
            display: none;
            /* height: 30px; */
            & .rdrYearPicker {
                display: none;
            }
            /* & .rdrMonthAndYearPickers select{
                background-position: right 18px center;
            } */
        }
        .rdrDay{
            line-height: 2em;
        }
        & .rdrDayToday .rdrDayNumber span:after{
            bottom: 3px;
        }
        & .rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview{
            /* top: 10px;
            bottom: -1px; */
        }
    }

    // week
    .no_week_data{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 13px;
        color: #858585;
    }
`
export const DailyStyle = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 120px;
    box-sizing: border-box;
    & > div:nth-of-type(1){height: 70%}
    & > div:nth-of-type(2){height: 30%}
    textarea{
        width: 100%;
        height: 100%;
        padding: 5px;
        border: none;
        border: 1px solid #eaeaea;
        border-bottom: none;
        resize: none;
        font-size: 20px;
        background-color: ${props => `${props.notUse ? '#fff' : '#f1f1f1'}}`};
        &:focus{
            outline: none;
        }
    }
    button{
        width: 50%;
        height: 100%;
        background-color: #e7e7e7;
        &:last-child{
            background-color: #a5cbff;
        }
    }
`
export const WeeklyTableStyle = styled.table`
    margin-top: 30px !important;
    thead > tr {border-bottom: 5px solid #fff;}
    th{
        font-size: 13px;
        &:nth-of-type(2){ background-color:#ffddd7 }
        &:nth-of-type(3){ background-color:#ffffc4 }
        &:nth-of-type(4){ background-color:#daf1da }
        border: 1px solid #fff;
    }
    td{
        /* border: 1px solid #fff; */
        height: 60px;
        font-size: 10px;
        border: 1px solid #fff;
        box-sizing: unset;
        padding: 3px;
        &:nth-of-type(1){font-size:11px; font-weight: 600;}
        &:nth-of-type(2),&:nth-of-type(3){
            background-color:#ffddd7;
        }
        &:nth-of-type(4),&:nth-of-type(5){
            background-color:#ffffc4;
        }
        &:nth-of-type(6),&:nth-of-type(7){
            background-color:#daf1da;
        }
    }
`

export const MonthlyTableStyle = styled.div`
    .md-custom-event-img {
    width: 30px;
    height: 30px;
    }

    .mbsc-custom-event-name {
        padding: 0 10px;
    }

    .md-custom-event-cont {
        display: flex;
        align-items: center;
        padding-top: 10px;
        font-size: 13px;
    }

    .md-custom-event-btn.mbsc-button {
        position: absolute;
        right: 10px;
        bottom: 8px;
        line-height: 20px;
        padding: 0px 6px;
    }

    .custom-event-popover.mbsc-material .mbsc-popover-list .mbsc-event {
        padding: 10px 14px;
    }

    .custom-event-popover.mbsc-ios .mbsc-popover-list {
        width: 340px;
    }

    .custom-event-popover.mbsc-material .mbsc-popover-list {
        width: 320px;
    }

    .custom-event-popover.mbsc-windows .mbsc-popover-list {
        width: 340px;
    }


`
