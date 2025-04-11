import React, { createContext, useEffect, useState } from 'react';
import Chart from '../components/Chart';
import DateInput from '../components/DateInput';
import { Button } from 'bootstrap';

export const DateContext = createContext();

export default function Detail() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [submit, setSubmit] = useState(null);

  useEffect(()=>{
    console.log('connecting')
    const today = new Date();
    today.setHours(0,0,0,0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate()-2);
    yesterday.setHours(0,0,0,0);
    
    setEndDate(today.toISOString().slice(0,10));
    setStartDate(yesterday.toISOString().slice(0,10))
    console.log(`Iso yesterday ${yesterday.toISOString().slice(0,10)}`)
    console.log(`Iso today ${today.toISOString().slice(0,10)}`)
  },[])

  
  useEffect(()=>{
    
    console.log(startDate)
  },[])

  return (
    <DateContext.Provider value={[ startDate , setStartDate , endDate , setEndDate , submit , setSubmit]}>
      <Chart/>
      <DateInput/>
    </DateContext.Provider>
  )
}
