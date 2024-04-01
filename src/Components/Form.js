import React from "react";
import './Form.css';
let Form = () => {
    return(
       <React.Fragment>
        <div className="form_container">
            <div className="form_details">
                <h1>Form</h1>
                <form className="form_data">
                    <label>FIRST NAME</label>
                    <input type="text" name="first name"></input>
                    <label>LAST NAME</label>
                    <input type="text" name="last name"></input>
                </form>
            </div>
        </div>
       </React.Fragment>
    );
}
export default Form;