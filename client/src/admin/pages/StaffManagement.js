import React from "react";

// Importing NAVBAR components
import Navbar from "../components/navbar/Navbar";

// Importing BOOTSTRAP components
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// importing SIDEBAR LINKS
import { Sidebar } from "../components/sidebar/Sidebar";
import AddOrUpdateStaffForm from "../components/staff/AddOrUpdateStaffForm";
import StaffsTable from "../components/staff/StaffsTable";

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
            <div id="admin_staff_management">
              <Row>
                <Col lg={12}>
                  <StaffsTable />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <AddOrUpdateStaffForm />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailStatics;
