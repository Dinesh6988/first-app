import React from "react";
import "./Mobile.scss";
import Google_img from "../../images/Google_img.png";
import App_img from "../../images/App_img.png";
import Mobile_img from "../../images/Mobile_img.png";
function Mobile() {
  return (
    <React.Fragment>
      <div className="uborahealth_download_container">
        <div className="uborahealth_download">
          <h2>Want to explore ubora health?</h2>
          <h1>DOWNLOAD OUR APP!</h1>
          <div className="uborahealth_download_images">
            <div className="googleplay">
              <img src={Google_img} alt="no-img"/>
            </div>
            <div className="appstore">
              <img src={App_img} alt="no-img"/>
            </div>
          </div>
        </div>
        <div className="uborahealth_mobile_image">
          <img src={Mobile_img}alt="no-img"/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Mobile;
