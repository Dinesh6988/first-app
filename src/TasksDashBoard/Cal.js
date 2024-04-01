import React from "react";
import "./Cal.scss";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ExTable from "./ExTable";
function Cal () {
  return(
    <div>
      <div className="calendar">
      <Calendar />
      <ExTable/>
      </div>
    </div>
  )
}

 export default Cal;
