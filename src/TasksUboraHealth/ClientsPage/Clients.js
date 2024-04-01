import React from "react";
import "./Clients.scss";
import { Carousel } from 'antd';
import ClientReview from "./ClientReview";
import ClientsReview1 from "./ClientsReview1";
import ClientsReview2 from "./ClientsReview2";
function Clients() {
  return (
    <div className="bg_color">
     <div className="heading">
     <h1>Our Happy Clients</h1>
     </div>
<Carousel autoplay>
   <ClientReview/>
   <ClientsReview1/>
   <ClientsReview2/>
  </Carousel>
  </div>
  );
}
export default Clients;