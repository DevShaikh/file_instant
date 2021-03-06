import React from "react";

// Importing NAVBAR components
import Navbar from "../components/navbar/Navbar";

// Importing BOOTSTRAP components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// importing SIDEBAR LINKS
import { Sidebar } from "../components/sidebar/Sidebar";

// Importing Categories Component
import Categories from "../components/softwares/Categories";

const SoftwareCategories = () => {
  return (
    <div className="admin_main">
      <Container fluid>
        <Row>
          <Col lg={2} className="p-0">
            <Sidebar activeClass="sidePanelActive" />
          </Col>
          <Col lg={10} className="p-0">
            <Navbar navTitle="Software Categories" />
            <div id="admin_softwares_categories">
              <div className="row mb-5">
                <Categories />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SoftwareCategories;
