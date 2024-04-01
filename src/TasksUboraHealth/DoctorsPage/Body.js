import React from "react";
import "./Body.scss";
import Uborahealth_img1 from "../../images/Uborahealth_img1.png";
import { Button } from "antd";
function Body() {
  return (
    <React.Fragment>
      <div class="uborahealth_banner">
        <div class="uborahealth_banner_head">
          <h1>ease your healthcare worries with uborahealth services</h1>
          <h2>Doctor</h2>
          <img src={Uborahealth_img1} alt="no-img" className="image" />
          <p>
            Uborahealth provides a one-stop solution for all your healthcare
            needs. From senior care to tele health and care giver, we have you
            covered. We provide comprehensive health care solutions that take
            the guesswork out of finding the right care for your family. We make
            sure you get the best-in-class service you deserve!
          </p>
          <Button className="btn1" type="primary">
            Get Started
          </Button>
        </div>
        <div class="uborahealth_image1">
          <img src={Uborahealth_img1} alt="no-img"/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Body;
