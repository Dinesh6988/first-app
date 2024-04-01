import React from "react";
import Columbus_img from "../../images/Columbus_img.png";
function Promotions() {
  return (
    <React.Fragment>
      <div className="promotions_container">
        <div className="image1">
          <img src={Columbus_img} alt="no-img" />
        </div>
        <div className="promotions_details">
          <h1>
            Flat<span>20%</span>off
          </h1>
          <h1>
            On<span>Senior Care</span>Services
          </h1>
          <h5>
            We are we very happy to announce that Columbus day promotion for
            your senior care booking service. hope you will get it
          </h5>
          <div className="coupon">
            <h3>
              Coupon Code:<span>COLUMB1</span>
            </h3>
          </div>
          <div className="valid">
            <h4>
              offer valid till:<span>03-30-2024</span>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Promotions;
