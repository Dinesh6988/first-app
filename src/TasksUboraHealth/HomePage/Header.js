import React from "react";
import "./Header.scss";
import UboraHealthLogo_img1 from "../../images/UboraHealthLogo_img1.png";
import { Button } from "antd";
import {MenuOutlined} from "@ant-design/icons";
import Dropdown1 from "../DropDown1";
import DropDown2 from "../DropDown2";
import { useNavigate } from "react-router-dom";

function Header() {
  
  const nav = useNavigate ();


const login = () => {
  nav("/login")
}
  
  return (
    <React.Fragment>
      <div className="uborahealth_container">
        <div className="uborahealth_logo">
          <img src={UboraHealthLogo_img1} />
        </div>
        <MenuOutlined className="menu"/>
        <div className="dropdown">
          <div className="dropdown1">
        <Dropdown1/>
        </div>
        <div className="dropdown2">
        <DropDown2/>
        </div>
          <Button className="button1" type="primary" onClick={login}>
            Login
          </Button>
          <Button className="button2" type="primary">
            Partner with us
          </Button>
          </div>
        </div> 
    </React.Fragment>
  );
}
export default Header;