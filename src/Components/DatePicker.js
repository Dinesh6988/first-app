import React from "react";
import { DatePicker, TimePicker } from "antd";
function Ant () {
  return ( 
    <React.Fragment>
      <div className="date_picker">
        <DatePicker picker='quarter' />
        <DatePicker.RangePicker picker='month'/>
        <TimePicker/>
      </div>
    </React.Fragment>
  );
};
export default Ant;
