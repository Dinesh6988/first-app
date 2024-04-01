import React from "react";
import intro_img from "../images/intro_img.png";
import "./Dev2ProdBody.css";
import { Button } from "antd";
function Dev2ProdBody() {
  return (
    <React.Fragment>
      <div className="dev2prod_body">
        <div className="dev2prod_body_details">
          <p>
            Celebrate success with software solutions that go beyond
            <span>future</span>
          </p>
          <Button className="started" type="primary">
            Get Started
          </Button>
        </div>
        <div className="dev2prod_body_image_details">
          <img src={intro_img} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdBody;
