import React from "react";

// Importing NAVBAR components
import Navbar from "../components/navbar/Navbar";

// Importing BOOTSTRAP components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// importing SIDEBAR LINKS
import { Sidebar } from "../components/sidebar/Sidebar";

const DetailStatics = () => {
  return (
    <div className="admin_main">
      <Container fluid>
        <Row>
          <Col lg={2} className="p-0">
            <Sidebar activeClass="sidePanelActive" />
          </Col>
          <Col lg={10} className="p-0">
            <Navbar navTitle="Staff Management" />
            <div id="admin_detail_statics">
              <h3>Detail Statics</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailStatics;
