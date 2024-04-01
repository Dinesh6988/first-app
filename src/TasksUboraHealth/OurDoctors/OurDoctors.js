import React from "react";
import './OurDoctors.scss';
import UboraHealth_img3 from "../../images/Uborahealth_img3.png";
import Video_img from "../../images/Video_img.png";
import Chat_img from "../../images/Chat_img.png";
import { Button } from "antd";
function OurDoctors() {
  return (
    <React.Fragment>
      <div className="uborahealth_doctors_container">
        <div className="uborahealth_image3">
          <img src={UboraHealth_img3} alt="no-img"/>
        </div>
        <div className="uborahealth_doctors">
          <h1>Our Doctors</h1>
          <h2>Come to you</h2>
          <h3>Reduce Stress With Uborahealth</h3>
          <h5>
            Our telehealth services are designed to provide peace of mind when
            it comes to managing your health. With access to medical experts and
            up-to-date information, uborahealth information makes sure you have
            easy access to all the resources you need – whenever and wherever
            you need them. Enjoy easy access to quality healthcare from the
            comfort of your own home with our telehealth services. Our team of
            experts ensure you get the best service possible.
          </h5>
          <div className="video">
            <img src={Video_img} alt="no-img"/>
            <h4>Video call with doctors</h4>
          </div>
          <div className="chat">
            <img src={Chat_img} alt="no-img"/>
            <h4>Chat with professionals</h4>
          </div>
          <Button className="btn3" type="primary">Book Appointment</Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default OurDoctors;