import React from "react";

class Empolyee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "jhon",
          age: 35,
        },
        {
          name: "allen",
          age: 25,
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card_body">
            <span>NAME : {this.state.employees[0].name}</span>
            <br />
            <span>Age : {this.state.employees[0].age} yrs</span>
          </div>
        </div>
        <div className="card">
          <div className="card_body">
            <span>NAME : {this.state.employees[1].name}</span>
            <br />
            <span>Age : {this.state.employees[1].age} yrs</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Empolyee;
