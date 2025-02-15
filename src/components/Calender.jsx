import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (


    
    <div className="flex flex-col items-center p-10 w-full">
      
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      <Calendar
        onChange={setDate}
        value={date}
        className="border rounded-lg p-4 shadow-lg"
      />
      <p className="mt-4 text-lg">Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default CalendarPage;
