import React from "react";
import CHESTAI_img from "../images/CHESTAI_img.png";
import culinda_img from "../images/culinda_img.png";
import healthshare_img from "../images/healthshare_img.png";
import medscore_img from "../images/medscore_img.png";
import "./Dev2ProdClient.css";
import { Carousel } from "antd";
function Dev2ProdClient() {
  return (
    <React.Fragment>
      <div class="dev2prod_client_container">
        <div class="dev2prod_client_head">
          <h3>Our Clients</h3>
        </div>
        <Carousel autoplay>
          <div className="contentStyle">
            <h6 className="contentStyle">
              <img src={CHESTAI_img} />
              <img src={culinda_img} />
              <img src={healthshare_img} />
              <img src={medscore_img} />
              <img src={CHESTAI_img} />
              <img src={culinda_img} />
            </h6>
          </div>
          <div className="contentStyle">
            <h6 className="contentStyle">
              <img src={CHESTAI_img} />
              <img src={culinda_img} />
              <img src={healthshare_img} />
              <img src={medscore_img} />
              <img src={CHESTAI_img} />
              <img src={culinda_img} />
            </h6>
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdClient;
