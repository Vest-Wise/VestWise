import React, { useContext, useEffect, useState } from 'react'
import { DateContext } from '../views/Detail';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function DateInput() {
    const [startDate, setStartDate, endDate, setEndDate] = useContext(DateContext);
    const [dateRange, setDateRange] = useState([null,null])

    const onChange = (dates) => {
        console.log(dates);
        const [start,end] = dateRange;
        setDateRange(dates)
        if (start && end){
            // setStartDate(new Date(start).toISOString().slice(0,10));
            // setEndDate(new Date(end).toISOString().slice(0,10));
            console.log("start : " + start)
            setStartDate(start);
            setEndDate(end);
        }

    }

    useEffect(() => {
          console.log(`in picker start: ${startDate}`)
          console.log(`in picker end: ${endDate}`)
        },[startDate])

    return (
    <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={onChange}
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        maxDate={new Date()}
        selectsRange
        withPortal
        placeholderText='Select a Date Range'
        />
  )
}
