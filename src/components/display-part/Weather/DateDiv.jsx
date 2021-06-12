import React, {useState} from 'react'

const DateDiv = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

function getTime() {
   const newTime = new Date().toLocaleTimeString()
    setTime(newTime);
 }
setInterval(getTime, 500)
    
function getDate() {
    const newDate = new Date().toDateString()
    setDate(newDate);
 }
setInterval(getDate,100)
 
    return (
        <div className="time-div">
            <h1 className="date-text"> {date} </h1>
            <p className="time-text"> | {time}</p>
        </div>
    )
}

export default DateDiv
