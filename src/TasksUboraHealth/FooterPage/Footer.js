import React from "react";
import "./Footer.scss";
import Ubfoot_img from "../../images/Ubfoot_img.png";
function Footer() {
  return (
    <React.Fragment>
      <div className="uborahealth_foot">
        <div className="uborahealth_footer_container">
          <div className="uborahealth_footer_logo">
            <img src={Ubfoot_img} alt="no-img"/>
          </div>
          <div className="uborahealth_footer_details">
            <div class="uborahealth_footer_content">
              <h6>
                <span>Tel</span>+1 (888) 844-6505
              </h6>
              <h6>
                <span>Fax</span> +1909 284 8554
              </h6>
              <h6>
                <span>Email</span> support@uborahealth.com
              </h6>
            </div>
            <div className="uborahealth_footer_service">
              <h4>Services</h4>
              <h6>Doctors</h6>
              <h6>Senior Care</h6>
              <h6>Care Givers</h6>
              <h6>Pharmacy</h6>
            </div>
            <div className="uborahealth_footer_customer">
              <h4>Customer Support</h4>
              <h6>About Us</h6>
              <h6>Privacy Policy</h6>
            </div>
          </div>
        </div>
        <div className="uborahealth_information_container">
          <div className="uborahealth_information">
            <h4>UBORA HEALTH</h4>
            <h5>
              Ubora Health provides a one-stop solution for all your healthcare
              needs.
            </h5>
          </div>
          <div className="uborahealth_address">
            <h4>ADDRESS</h4>
            <h5>
              <i class="fa-solid fa-location-dot"></i>3595-4 Inland Empire Blvd.
              Suite 200 Ontario, California, United States, 91764
            </h5>
          </div>
        </div>
        <div className="uborahealth_copyrights">
          <h5>Ubora Health | All rights reserved 2023</h5>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
