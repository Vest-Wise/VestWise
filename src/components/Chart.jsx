import React, { useContext, useEffect, useState } from 'react'
import { DateContext } from '../views/Detail';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [stockData, setStockData] = useState(null);
    const [startDate, setStartDate, endDate, setEndDate, submit, setSubmit] = useContext(DateContext);
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${apiUrl}/v2/aggs/ticker/VZ/range/60/minute/${startDate}/${endDate}?adjusted=true&sort=asc&limit=50000&apiKey=${apiKey}`);
                if (response.ok) {
                  const data = await response.json();
                  const cleanData = data.results.map(d => ({
                    time: new Date(d.t).toLocaleDateString([], {hour:'2-digit', minute:'2-digit'}),
                    price: d.c,
                  }))
                  setStockData(cleanData);
                 }
              } catch (err) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
        }
      if (startDate && endDate){
        fetchData();
      }
    },[]);

    useEffect(() => {
      console.log(`chart useEffect start: ${startDate}`)
      console.log(`chart useEffect end: ${endDate}`)
    },[startDate])

    if (loading) return <div>Loading items...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
      <AreaChart
        width={500}
        height={400}
        data={stockData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={['auto','auto']}/>
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
    )
}
