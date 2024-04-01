import React from "react";
import './Seniorcare.scss';
import { Carousel } from 'antd';
import Promotions from "./Promotions";
function SeniorCare () {
   
    return(
        <React.Fragment>
            <div className="clt" >
            <Carousel autoplay>
           <Promotions/>
           <Promotions/>
           </Carousel>
            </div>
        </React.Fragment>
    );
}

export default SeniorCare;