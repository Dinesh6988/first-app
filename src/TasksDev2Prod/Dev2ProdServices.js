import React from "react";
import "./Dev2ProdServices.css";
import { Link } from "react-router-dom";
import Services_img1 from "../images/Services_img1.png";
import Services_img2 from "../images/Services_img2.png";
import Services_img3 from "../images/Services_img3.png";
import Services_img4 from "../images/Services_img4.png";
import Services_img5 from "../images/Services_img5.png";
import Services_img6 from "../images/Services_img6.png";
function Dev2ProdServices() {
  return (
    <React.Fragment>
      <div className="dev2prod_services_container">
        <div>
          <h1 className="head">Services</h1>
          <p className="text">
            Thinking Big? We make it Possible! Choose From Our Varied Range of
            Services.
          </p>
        </div>
        <div className="dev2prod_uidesigns_cards">
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img1} />
              <h6 className="title">UX/UI DESIGNS</h6>
              <p className="content">
                Unique mockups or design solutions that marries UI and UX
                principles to transform into a seamless customer journey.
              </p>
            </div>
          </div>
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img2} />
              <h6 className="title">Enterprise Web Applications</h6>
              <p className="content">
                Custom B2B and B2C web applications that are built from scratch
                to meet operational efficiency and the highest degrees of
                modularity.
              </p>
            </div>
          </div>
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img3} />
              <h6 className="title">Mobile Applications</h6>
              <p className="content">
                Native and Hybrid applications that out far excellence for being
                intuitive, mobile friendly and easy on budget at the same time.
              </p>
            </div>
          </div>
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img4} />
              <h6 className="title">Cloud Solutions</h6>
              <p className="content">
                Native and Hybrid applications that out far excellence for being
                intuitive, mobile friendly and easy on budget at the same time.
              </p>
            </div>
          </div>
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img5} />
              <h6 className="title">Voice Application</h6>
              <p className="content">
                A foray into the realm of groovy and sassy voice apps. Say
                goodbye to antiques with new application building technologies.
              </p>
            </div>
          </div>
          <div className="dev2prod_uidesigns">
            <div className="dev2prod_uidesigns_details">
              <img src={Services_img6} />
              <h6 className="title">AI/ML</h6>
              <p className="content">
                Explore the new world of ideas and assist businesses in making
                wise choices. Ping us to build the AI apps you dream of. We got
                the right team for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdServices;
