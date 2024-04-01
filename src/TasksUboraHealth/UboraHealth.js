import React from "react";
import Header from "./HomePage/Header";
import Body from "./DoctorsPage/Body";
import SeniorCare from "./SeniorCarePage/SeniorCare";
import OurDoctors from "./OurDoctors/OurDoctors";
import CareGivers from "./CareGiversPage/CareGivers";
import Clients from "./ClientsPage/Clients";
import Mobile from "./MobilePage/Mobile";
import Footer from "./FooterPage/Footer";
function UboraHealth () {
    return(
      <div className="uborahealth">
          <Header/>
          <Body/>
          <SeniorCare/>
          <OurDoctors/>
          <CareGivers/>
          <Clients/>
          <Mobile/>
          <Footer/>
       </div>
    );
}
export default UboraHealth;