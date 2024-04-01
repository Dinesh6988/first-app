import React from "react";
import './ClientsReview2.scss';
import Clients_img7 from "../../images/Clients_img7.png";
import Clients_img8 from "../../images/Clients_img8.png";
import Clients_img9 from "../../images/Clients_img9.png";
function ClientsReview2 () {
    return(
        <div className="uborahealth_clients_container">
        <div className="uborahealth_clients">
          <div className="uborahealth_clients_content">
            <h2>"</h2>
            <h4>
              "My father has been a resident at this senior care center for
              several months now, and we could not be more pleased with the
              level of care he has received. The staff is attentive and kind,
              and they have gone out of their way to accommodate his needs and
              preferences. The facility itself is clean and well-maintained, and
              there are always plenty of activities and events to keep the
              residents engaged and stimulated. I would definitely recommend
              this facility to others."
            </h4>
            <h2 id="qototaions">"</h2>
          </div>
          <div className="uborahealth_happyclients_container">
            <div className="uborahealth_happyclients">
              <img src={Clients_img7} alt="no-img"/>
              <h6>Marie</h6>
              <p className="content1">
                "I am incredibly grateful for the compassionate and professional
                care that my mother has received at this senior care facility.
                The staff goes above and beyond to ensure that she is
                comfortable and well-cared for, and they always treat her with
                dignity and respect.
              </p>
            </div>
            <div className="uborahealth_happyclients1">
              <img src={Clients_img8} alt="no-img"/>
              <h5>Leonie</h5>
            </div>
            <div className="uborahealth_happyclients2">
              <img src={Clients_img9} alt="no-img"/>
              <h3>Julia</h3>
              <p className="content2">
                "The staff at this senior care home are simply amazing. They are
                patient, kind, and caring, and they truly go out of their way to
                make sure that all of the residents are well-cared for and
                comfortable. My grandmother has been a resident here for several
                years now.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ClientsReview2;