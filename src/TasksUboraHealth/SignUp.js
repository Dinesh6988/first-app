import React from "react";
import "./SignUp.scss";
import { Input, Button, Checkbox } from "antd";
import UboraHealthLogo_img1 from "../images/UboraHealthLogo_img1.png";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const nav = useNavigate();
  const login = () =>{
    nav("/login")
  }
  return (
    <React.Fragment>
      <div className="image_logo">
        <img src={UboraHealthLogo_img1} alt="no-img" onClick={() => nav(-1)} />
      </div>
      <div className="sign_container">
      <h1>Sign up for free</h1>
          <h4>
            Already have an account? <span onClick={login}>sign in</span>
          </h4>
        <div className="signup_form">
          <div className="input">
            <label>First Name:</label>
            <Input placeholder="Enter First Name" />
          </div>
          <div className="input">
            <label>Last Name:</label>
            <Input placeholder="Enter Last Name" />
          </div>
          <div className="input">
            <label>Your Email:</label>
            <Input placeholder="Enter Your Email" />
          </div>
          <div className="input">
            <label>Your Phone Number:</label>
            <Input placeholder="+1 Enter Phone No" />
          </div>
          <div className="input">
            <label>Password</label>
            <Input placeholder="Enter Password" />
          </div>
          <div className="input">
            <label>Confirm Password:</label>
            <Input placeholder="Enter Confirm Password" />
          </div>
        </div>
        <div className="input_location">
          <label>Location:</label>
          <Input placeholder="Search Address" />
        </div>
        
        <Button type="primary"><span>Sign up</span></Button>

        <div className="foot">
        <div className="check">
          <Checkbox className="checkbox" onChange={onChange}></Checkbox>
        </div>
        <div>
          <h5>
            I acknowledge that you read and agree to our
            <span>Terms of Service</span> And<span>Privacy Policy</span>
          </h5>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SignUp;
