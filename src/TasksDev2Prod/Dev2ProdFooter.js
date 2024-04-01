import React from "react";
import Dev2ProdLogo_img from "../images/Dev2ProdLogo_img.png";
import Twitter_img from "../images/Twitter_img.png";
import FaceBook_img from "../images/FeaceBook_img.png";
import LinkedIn_img from "../images/LinkedIn_img.png";
import Instagram_img from "../images/Instagram_img.png";
import { Button, Input } from "antd";
import "./Dev2ProdFooter.css";
const { TextArea } = Input;
function Dev2ProdFooter() {
  return (
    <React.Fragment>
      <div className="dev2prod_footer_container">
        <div className="dev2prod_footer_details">
          <img src={Dev2ProdLogo_img} />
          <p id="footer1">
            Dev2Prod is an international team of technological pundits that
            helps startups and small businesses build and deploy modern-day
            technological marvels. Our experts come with decades of experience
            and deal with cutting-edge advanced solutions like Machine learning
            and Artificial Intelligence.
          </p>
        </div>
        <div className="dev2prod_links">
          <h4>USEFUL LINKS</h4>
          <h6>Home</h6>
          <h6>About us</h6>
          <h6>Services</h6>
          <h6>Terms of service</h6>
          <h6>Privacy Policy</h6>
          <h4>CONTACT US</h4>
          <p className="dev2prod_contact_details">
            Plot.No: 97, Beside CGR international School Ayyappa Society Main
            Rd, Madhapur, Hyderabad 500081 Telangana, India
            <br />
            <span>Email:</span> admin@dev2prod.com
          </p>

          <div className="dev2prod_contact_images">
            <img src={Twitter_img} />
            <img src={FaceBook_img} />
            <img src={LinkedIn_img} />
            <img src={Instagram_img} />
          </div>
        </div>

        <div className="dev2prod_message_head">
          <h4>SEND US A MESSAGE</h4>
          <div className="dev2prod_name">
            <Input placeholder="Name" />
          </div>
          <div className="dev2prod_email">
            <Input placeholder="Your Email" />
          </div>
          <div className="dev2prod_subject">
            <Input placeholder="Subject" />
          </div>
          <div className="dev2prod_message">
            <TextArea rows={4} placeholder="Message" />
          </div>
          <div>
            <Button className="message" type="primary">
              Send Message
            </Button>
          </div>
        </div>
      </div>
      <div className="dev2prod_copyright">
        <h3>
          © Copyright<span>Dev2prod Soft Solutions.</span>All Rights Reserved
        </h3>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdFooter;
