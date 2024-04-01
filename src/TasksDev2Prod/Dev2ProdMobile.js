import React from "react";
import "./Dev2ProdMobile.css";
import Dev2ProdMobile_img from "../images/Dev2ProdMobile_img.png";
function Dev2ProdMobile() {
  return (
    <React.Fragment>
      <div class="dev2prod_mobile_container">
        <div class="dev2prod_mobile_details">
          <p>
            Next, every product of ours goes through rigorous testing to
            identify flaws and loopholes. Our experts ensure that no stone is
            left unturned. We use state of the art tools and software solutions
            that helps us find test cases which may make or break your end
            product.
          </p>
          <p>
            The end solutions are then delivered online or is hosted as per the
            needs of the customer. Being a resource intensive stage, we help our
            customers get hosting solutions that are feasible, flexible and
            smart at the same time.
          </p>
          <p>
            We stress on building relationship and hence post the completion of
            the project we provide customer support and services to all our
            clients.
          </p>
        </div>
        <div class="dev2prod_mobile_image">
          <img src={Dev2ProdMobile_img} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdMobile;
