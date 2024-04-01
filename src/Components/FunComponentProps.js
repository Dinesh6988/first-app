import React, { useState } from "react";

let Student = () => {
  let [state, setState] = useState({
    Students: [
      {
        name: "jhon",
        course: "MBBS",
      },
      {
        name: "smith",
        course: "degree",
      },
    ],
  });

  return (
    <React.Fragment>
      <div className="card">
        <div className="card_body">
          <span> Name : {state.Students[0].name}</span>
          <span> Course : {state.Students[0].course}</span>
        </div>
      </div>
      <div className="card">
        <div className="card_body">
          <span> Name : {state.Students[1].name}</span>
          <span> Course : {state.Students[1].course}</span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Student;
