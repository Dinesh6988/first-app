import React from "react";
import "./Header.scss";
import DashBoardLogo_img from "../../images/DashBoardLogo_img.png";
import DropDown1 from "./DropDown1";
import { BellOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import H_img from "../../images/H_img.png";
import { useNavigate } from "react-router-dom";
function Header() {
  const nav = useNavigate ();


  const login = () => {
    nav("/login")
  }
  return (
    <React.Fragment>
      <div className="dashboard_container">
        <div className="dashboard_headerlogo">
          <img src={DashBoardLogo_img} alt="no-img" />
        </div>
         <div className="men">
          <MenuOutlined />
         </div>
        <div className="logo">
          <img src={H_img} alt="n0-img"/>
        </div>
        <div className="dashboard_headerdetails">
          <p>Dashboard</p>
          <p>Bookings</p>
          <p>Appointments</p>
          <p>Health Records</p>
        </div>
        <div className="dashboard_headericons">
          <div className="dropdown">
            <DropDown1 />
          </div>
          <div className="bell">
            <BellOutlined />
          </div>
          <div className="symbol">
            <Avatar onClick={login}><span>D</span></Avatar>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;
