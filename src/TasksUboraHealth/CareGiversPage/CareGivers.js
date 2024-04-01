import React from "react";
import "./CareGivers.scss";
import Uborahealth_img4 from "../../images/Uborahealth_img4.png";
import { Button } from "antd";
function CareGivers() {
  return (
    <React.Fragment>
      <div className="uborahealth_care_container">
        <div className="uborahealth_care">
          <h1>Our Care Givers</h1>
          <h2>Look For You</h2>
          <h3>Get Professional Caregiver Services</h3>
          <h5>
            We understand that sometimes professional help is needed when taking
            care of your elderly or sick family members. With Uborahealth, you
            can easily book an experienced caregiver who will look after your
            loved ones in the comfort of their own home. We also provide
            professional, compassionate care givers who can offer support and
            assistance with tasks such as personal hygiene, meal preparation,
            mobility assistance and more. Our experienced team understands that.
          </h5>
          <Button className="btn4" type="primary">Book Care Giver</Button>
        </div>
        <div className="uborahealth_image4">
          <img src={Uborahealth_img4} alt="no-img"/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CareGivers;
