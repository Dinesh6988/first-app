import React from "react";
import "./Dev2ProdChoose.css";
import Dev2Prod_img2 from "../images/Dev2Prod_img2.png";
import Choose_img1 from "../images/Choose_img1.png";
import Choose_img2 from "../images/Choose_img2.png";
import Choose_img3 from "../images/Choose_img3.png";
function Dev2ProdChoose() {
  return (
    <React.Fragment>
      <div className="dev2prod_choose">
        <div className="dev2prod_choose_head">
          <h1 className="choose">Why Choose Us ?</h1>
          <p className="heading">
            Your decision for your product has everything to do with your
            success. Let the experts guide you.
          </p>
        </div>
      </div>
      <div className="dev2prod_choose_container">
        <div className="dev2prod_choose_image">
          <div className="dev2prod_choose_image_details">
            <img src={Dev2Prod_img2} />
          </div>
        </div>
        <div className="dev2prod_choose_details">
          <p id="choose1">
            Starting a venture is not easy. The team, along with the product,
            plays a pivotal role in bring a mere idea to a living product. This
            is where we come into the picture with our innovative solutions and
            expert mentorship programs.
          </p>
          <p id="choose2">
            Learn why we are a great fit for your next project.
          </p>
          <div className="budget">
            <img src={Choose_img1} />
            <h1>Budget-Friendly and Timely Delivery</h1>
          </div>
          <div className="choose3">
            <p>
              They say that time is money. True enough. Software solutions are
              resource-intensive and complex at the very least. With Dev2Prod,
              you get an eye-opener about things you need and, more importantly,
              things you don’t need for your startup. This way, we help
              businesses build the perfect solutions they are looking for.
            </p>
          </div>
          <div className="team">
            <img src={Choose_img2} />
            <h1>Experienced and Dedicated Team</h1>
          </div>
          <div className="choose4">
            <p>
              For us, our paramount importance lies in helping you get started.
              This could be any software project. Our team of experienced and
              dedicated developers works hard to ensure you get only the best in
              the desired time frame. On the other hand, our team of experienced
              developers ensure better software solutions that goes beyond
              standard conventions.
            </p>
          </div>
          <div className="customer">
            <img src={Choose_img3} />
            <h1>Customer Centric</h1>
          </div>
          <div className="choose5">
            <p>
              While most companies claim to be customer centric, we go without
              the need. Our work reflects how deeply we value your idea and
              efforts and craft solutions with unparalleled conventions and
              expertise.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdChoose;
