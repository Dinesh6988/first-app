import { Col, Row } from "antd";
import React from "react";
import Welcome from "./WelcomePage/Welcome";
import SeniorCare from "./SeniorCarePage/SeniorCare";
import Card from "./CardsPage/card";
import Cal from './Cal';
import Schedules from "./SchedulesPage/Schedules";
import './Body.scss';
import ExTable from "./ExTable";
function Body () {
    return(
        <React.Fragment>
          <Row>
            <Col span={18} id="web">
              <Welcome/>
              <SeniorCare/>
              <Card/>
            </Col>
            <Col span={6} id="web">
              <Cal/>
              <ExTable />
              <Schedules/>
            </Col>
            </Row>
            <Row >
            <Col span={24} className="ipad">
            <Welcome/>
              <SeniorCare/>
              <Card/>
              <Cal/>
              <ExTable />
              <Schedules/>
            </Col>
            </Row>
        </React.Fragment>
    );
}
export default Body;