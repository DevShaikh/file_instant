import React from "react";

// Importing NAVBAR components
import Navbar from "../components/navbar/Navbar";

// Importing BOOTSTRAP components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// importing SIDEBAR LINKS
import { Sidebar } from "../components/sidebar/Sidebar";

//
import LatestSoftwares from "../components/softwares/LatestSoftwares";
import PopularSoftwares from "../components/softwares/PopularSoftwares";
import Softwares from "../components/softwares/Softwares";

const HomeManagement = () => {
  return (
    <div className="admin_main">
      <Container fluid>
        <Row>
          <Col lg={2} className="p-0">
            <Sidebar activeClass="sidePanelActive" />
          </Col>
          <Col lg={10} className="p-0">
            <Navbar navTitle="Home Management" />
            <div id="admin_home_management">
              <div className="row">
                <LatestSoftwares />
              </div>
              <div className="row my-4">
                <PopularSoftwares />
              </div>
              <div className="row">
                <Softwares />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeManagement;
