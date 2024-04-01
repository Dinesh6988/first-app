import React from "react";
import Dev2ProdLogo_img from "../images/Dev2ProdLogo_img.png";
import "./Dev2ProdHeader.css";
import { Link } from "react-router-dom";
import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MenuOutlined,
} from "@ant-design/icons";
// import {Icon} from "antd";

function Dev2ProdHeader() {
  return (
    <React.Fragment>
      <div className="dev2Prod_container">
        <div className="dev2prod_header">
          <div className="dev2prod_header_icons">
            <TwitterOutlined />
            <FacebookOutlined />
            <LinkedinOutlined />
            <InstagramOutlined />
          </div>
        </div>
        <div className="dev2prod_navi">
          <div className="dev2prod_logo">
            <img className="logo" src={Dev2ProdLogo_img} />
          </div>
          <MenuOutlined className="menu" />
          <div className="dev2prod_navi_links">
            <a href="/home" target="_blank">
              HOME
            </a>
            <a href="/about us" target="_blank">
              ABOUT US
            </a>
            <a href="/services" target="_blank">
              SERVICES
            </a>
            <a href="/contact us" target="_blank">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dev2ProdHeader;
