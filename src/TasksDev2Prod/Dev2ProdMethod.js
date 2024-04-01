import React from "react";
import Dev2Prod_img3 from "../images/Dev2Prod_img3.png";
import "./Dev2ProdMethod.css";
function dev2ProdMethod() {
  return (
    <React.Fragment>
      <div className="dev2prod_method_container">
        <div className="dev2prod_method_image">
          <img src={Dev2Prod_img3} />
        </div>
        <div className="dev2prod_method_deatails">
          <p id="method1">
            Our working method is standardized, with key components given
            paramount importance.
          </p>
          <p>
            Every great software begins with an humble idea. At this stage we
            sit with you to help you clarify your requirements and brainstorm
            solutions that are feasible and innovative in their approach.
          </p>
          <p>
            Based on the initial brainstorming session, we then move on to the
            mockup phase where we deliver a mockup that helps you visualize the
            end product and/ or make any modifications if as such needed.
          </p>
          <p>
            Only after required changes and based on your feedback, we enter
            into product development stage that gives shape to your vision and
            gives a visible form.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default dev2ProdMethod;
