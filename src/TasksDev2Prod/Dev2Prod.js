import React from "react";
import Dev2ProdHeader from "./Dev2ProdHeader";
import Dev2ProdBody from "./Dev2ProdBody";
import Dev2ProdAbout from "./Dev2ProdAbout";
import Dev2ProdServices from "./Dev2ProdServices";
import Dev2ProdChoose from "./Dev2ProdChoose";
import Dev2ProdMethod from "./Dev2ProdMethod";
import Dev2ProdMobile from "./Dev2ProdMobile";
import Dev2ProdClient from "./Dev2ProdClient";
import Dev2ProdFrequent from "./Dev2ProdFrequent";
import Dev2ProdFooter from "./Dev2ProdFooter";
const Dev2Prod = () => {
    return(
      <div>
        <Dev2ProdHeader/>
        <Dev2ProdBody/>
        <Dev2ProdAbout/>
        <Dev2ProdServices/>
        <Dev2ProdChoose/>
        <Dev2ProdMethod/>
        <Dev2ProdMobile/>
        <Dev2ProdClient/>
        <Dev2ProdFrequent/>
        <Dev2ProdFooter/>
      </div>
    );
}
export default Dev2Prod;