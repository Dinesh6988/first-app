import React from "react";
import './Welcome.scss';
import DashBoard_img1 from "../../images/DashBoard_img1.png";
import SeniorCare_img from "../../images/Senior Care_img.png";
import HomeHealth_img from "../../images/HomeHealth_img.png";
import Doctors_img from "../../images/Doctors_img.png";
import CareGivers_img from "../../images/CareGivers_img.png";
import Diagnostics_img from "../../images/Diagnostics_img.png";
import Pharmacy_img from "../../images/Pharmacy_img.png";
function Welcome () {
    return(
         <React.Fragment>
                <div className="body_container">
                <div className="welcome_img">
                <div className="image1">
                    <img src={DashBoard_img1} alt="no-img"/>
                </div>
                <div className="welcome_body">
                    <div className="heading">
                        <div className="welcome">
                            <h2>Welcome,Dinesh Koduru</h2>
                        </div>
                        <div className="welcome1">
                            <h4>Wednesday,march 20th 2024,7:55: 00 pm</h4>
                        </div>
                    </div>
                    <div className="images">
                        <div className="senior_img">
                            <img src={SeniorCare_img} alt="no-img"/>
                            <h4>Senior Care</h4>
                        </div>
                <div className="home_img">
                    <img src={HomeHealth_img} alt="no-img"/>
                    <h4>Home Health</h4>
                </div>
                <div className="doctors_img">
                    <img src={Doctors_img} alt="no-img"/>
                    <h4>Doctors</h4>
                </div>
                <div className="care_img">
                    <img src={CareGivers_img} alt="no-img"/>
                    <h4>Care Givers</h4>
                </div>
                <div className="diagnostics_img">
                    <img src={Diagnostics_img} alt="no-img"/>
                    <h4>Diagnostics</h4>
                </div>
                <div className="pharmacy_img">
                     <img src={Pharmacy_img} alt="no-img"/>
                     <h4>Pharmacy</h4>
                </div>
                </div>
                </div>
               </div> 
            </div>
         </React.Fragment>
    );
}
export default Welcome;