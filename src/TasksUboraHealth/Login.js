import React from "react";
import "./Login.scss";
import UboraHealthLogo_img1 from "../images/UboraHealthLogo_img1.png";
import { Input } from "antd";
import Arrow_img from "../images/Arrow_img.png";
import { Carousel } from "antd";
import Login_img1 from "../images/Login_img1.png";
import Login_img2 from "../images/Login_img2.png";
import Login_img3 from "../images/Login_img3.png";
import Login_img4 from "../images/Login_img4.png";
import Login_img5 from "../images/Login_img5.png";
import { useNavigate } from "react-router-dom";
function Login() {
  const nav= useNavigate();

  const forgot = () =>{
    nav("/forgot")
  }

  const signup = () => {
    nav("/signup")
  }
  
  const dash = () => {
    nav("/dash")
  }
  return (
    <React.Fragment>
      <div className="image_logo">
        <img src={UboraHealthLogo_img1} alt="no-img" onClick={()=> nav(-1)} />
      </div>
      <div className="form_container">
        <div className="form">
          <h2>Hello, Welcome Back!</h2>
          <h5>
            <span>Login</span>  with your data you entered during registration.
          </h5>
          <div className="input_email">
            <Input placeholder="Email Address" />
          </div>
          <div className="input_password">
            <Input.Password placeholder="Password" />
          </div>
          <h3 onClick={forgot}>Forgot Password?</h3>
          <div className="arrow">
            <img src={Arrow_img} alt="no-img" onClick={dash}/>
            </div>
         <h4>Don't have an account?<span className="signup" onClick={signup}>sign up</span></h4> 
        </div>
        <div>
        <div className="login_images">
            <Carousel autoplay>
                <img src={Login_img1} alt="no-img"/>
                <img src={Login_img2} alt="no-mg"/>
                <img src={Login_img3} alt="no-img"/>
                <img src={Login_img4} alt="no-mg"/>
                <img src={Login_img5} alt="no_img"/>
            </Carousel>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
