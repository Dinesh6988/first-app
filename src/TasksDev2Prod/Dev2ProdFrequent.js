import React from "react";
import "./Dev2ProdFrequent.css";
import Collapse1 from "./Collapse1";
function Dev2ProdFrequent() {
  return (
    <React.Fragment>
      <div className="dev2prod_frequent_container">
        <div className="dev2prod_frequent_head">
          <h1>Frequently Asked Questions</h1>
          <p>
            Get answers to your all doubts. For more information feel free to
            get in touch.
          </p>
        </div>
      </div>
      <div className="frequent_content">
        <Collapse1 />
      </div>
    </React.Fragment>
  );
}
export default Dev2ProdFrequent;
