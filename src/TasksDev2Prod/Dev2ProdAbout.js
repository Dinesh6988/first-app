import React from "react";
import Dev2Prod_img1 from "../images/Dev2Prod_img1.png";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./Dev2ProdAbout.css";
function Dev2ProdAbout() {
  return (
    <React.Fragment>
      <div className="dev2prod_aboutus_container">
        <div className="dev2prod_aboutus_image">
          <img src={Dev2Prod_img1} />
        </div>
        <div className="dev2prod_aboutus_details">
          <h1>About Us</h1>
          <p id="aboutus1">
            Exploration and inquisitiveness can take you far. It is only after
            you meet real experts you start your journey. Meet the architects of
            future.
          </p>
          <p id="aboutus2">
            Dev2Prod soft solutions is a global, multinational team of
            technology experts that all have a single goal in mind – achieve
            exceptional relationships with our customers. we offer a range of
            services to suit your needs. For us no project is “big” or “small”
            for we enjoy challenges at every level.
          </p>
          <p id="aboutus3">
            Our solutions are based on the latest technologies. By continuous
            exchange of knowledge and experiences with clients, dev2prod
            recognises the desires and needs, and together with them - we
            develop projects that bring a competitive advantage in the market.
            In this way, the satisfaction is mutual, and we grow together with
            our clients since each project brings new knowledge, new ideas, and
            new skills.
          </p>
          <div className="symbol1">
            <CheckCircleOutlined className="circle" />
            <p id="aboutus4">
              Design global solutions that meet international standards
            </p>
          </div>
          <div className="symbol2">
            <CheckCircleOutlined className="circle" />
            <p id="aboutus5">
              Software development that follows agile development practices
            </p>
          </div>
          <div className="symbol3">
            <CheckCircleOutlined className="circle" />
            <p id="aboutus6">
              Deploying cloud based solutions that turns vision into reality
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdAbout;
