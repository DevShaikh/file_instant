import React, { Fragment, useState } from "react";

import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/esm/InputGroup";
import { sidebarLinks } from "../sidebar/SidebarLinks";

const AddOrUpdateStaffForm = () => {
  const [staffFields, setStaffFields] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: "",
    roles: {
      Dashboard: false,
      HomeManagement: false,
      SoftwaresCategories: false,
      SoftwaresManagement: false,
      InfoPages: false,
      DetailStatics: false,
      StaffManagement: false,
      AlertsAndNotifications: false,
    },
  });

  const onChange = (e) => {
    setStaffFields({ ...staffFields, [e.target.name]: e.target.value });
  };
  const onCheck = (e) => {
    let checked = staffFields.roles[e.target.name];
    setStaffFields({
      ...staffFields,
      roles: { ...staffFields.roles, [e.target.name]: !checked },
    });
  };

  return (
    <Fragment>
      <h4 className="my-4">Staff Management</h4>
      <Form>
        <Row className="my-2">
          <Col>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="fName"
              value={staffFields.fName}
              placeholder="Enter first name here..."
              required
              onChange={onChange}
            />
          </Col>
          <Col>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              name="lName"
              value={staffFields.lName}
              placeholder="Enter last name here..."
              required
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={staffFields.email}
              placeholder="Enter email here..."
              required
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={staffFields.username}
              placeholder="Enter username here..."
              required
              onChange={onChange}
            />
          </Col>
          <Col>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password here..."
              value={staffFields.password}
              minLength="8"
              required
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Roles:</Form.Label>
            {sidebarLinks.map((link, key) => {
              const slug = link.title.split(" ").join("");
              return (
                <InputGroup className="mb-3" key={key}>
                  <InputGroup.Checkbox
                    name={slug}
                    aria-label="Checkbox for following text input"
                    checked={staffFields.roles[slug]}
                    onChange={onCheck}
                  />
                  <Form.Label className="ml-2 mb-0 roles_checkbox">
                    {link.title}
                  </Form.Label>
                </InputGroup>
              );
            })}
          </Col>
        </Row>
        <Row className="my-2 mt-4">
          <Col>
            <Button variant="primary" type="submit">
              Add Staff
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default AddOrUpdateStaffForm;
