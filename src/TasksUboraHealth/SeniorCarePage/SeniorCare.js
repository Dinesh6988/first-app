import React from "react";
import "./SeniorCare.scss";
import Uborahealth_img2 from "../../images/Uborahealth_img2.png";
import { Button } from "antd";
function SeniorCare() {
  return (
    <React.Fragment>
      <div className="uborahealth_seniorcare_container">
        <div className="uborahealth_seniorcare">
          <h1>Your family's Trusted </h1>
          <h2>Senior Care</h2>
          <h3>Care For Your Loved Once With Uborahealth</h3>
          <h5>
            We understand that taking care of your loved ones can be a daunting
            task. With Uborahealth, we make it easy for you to make sure that
            they are in good hands. We provide professional senior care and tele
            health services so you can be sure that your loved ones are in safe
            hands. We understand that everyone has different needs when it comes
            to healthcare. That's why we offer a wide range of services,
            tailored to meet each individual's specific needs. Whether you're
            looking for senior care or just need a little extra help with daily
            tasks – our team is here to find you the right solution.
          </h5>
          <Button className="btn2" type="primary">Book Day Care</Button>
        </div>
        <div className="uborahealth_image2">
          <img src={Uborahealth_img2} alt="no-img"/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SeniorCare;
