import React, { Fragment, useState } from "react";

import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { categoriesData } from "./CategoriesData";

const AddAndUpdateSoftware = () => {
  // eslint-disable-next-line
  const [formState, setFormState] = useState("add");

  const [softwareInputs, setSoftwareInputs] = useState({
    id: 325,
    name: "",
    versions: "",
    category: "",
    description: "",
    icon: "",
    requirements: "",
    language: "",
    availableLanguages: "",
    license: "",
    author: "",
    sha: "",
    screenshots: [],
  });

  const onChange = (e) =>
    setSoftwareInputs({ ...softwareInputs, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h3>{formState === "add" ? "Add New Software" : "Update Software"}</h3>
      <Form>
        <Row className="my-2">
          <Col>
            <Form.Label>Software ID:</Form.Label>
            <Form.Control
              type="number"
              name="id"
              value={softwareInputs.id}
              required
              readOnly
            />
          </Col>
        </Row>

        <Row className="my-2">
          <Col>
            <Form.Label>Software Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter software name here..."
              name="name"
              value={softwareInputs.name}
              required
              onChange={onChange}
            />
          </Col>
          <Col>
            <Form.Label>Software Version</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter software version here..."
              name="versions"
              value={softwareInputs.versions}
              required
              onChange={onChange}
            />
          </Col>
        </Row>

        <Row className="my-2">
          <Col>
            <Form.Label>Software Category</Form.Label>
            <Form.Control
              as="select"
              name="versions"
              value={softwareInputs.versions}
              required
              onChange={onChange}
            >
              <option value="">Select software category</option>
              {categoriesData.map((category, key) => (
                <option
                  value={category.name.split(" ").join("-").toLowerCase()}
                  key={key}
                >
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Form.Label>Software Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter software description here..."
              minLength="128"
              name="description"
              value={softwareInputs.description}
              required
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="my-2">
          <Col>
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Add Icon"
                name="icon"
                required
                onChange={onChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="my-2">
          <h4 className="mb-4">Technical Info</h4>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              <strong>Requirements: *</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="eg. Windows 10, Windows 8, Windows 7"
                name="requirements"
                value={softwareInputs.requirements}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>Language: *</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter Language here..."
                name="language"
                value={softwareInputs.language}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>Available languages: *</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="eg. English, Russian, Perisan, Arabic"
                name="availableLanguages"
                value={softwareInputs.availableLanguages}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>License: *</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter software license here..."
                name="license"
                value={softwareInputs.license}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>Author: *</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter software author here..."
                name="author"
                value={softwareInputs.author}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>SHA-1:</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="Enter SHA-1 here..."
                name="sha"
                value={softwareInputs.sha}
                required
                onChange={onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3}>
              <strong>Screenshots:</strong>
            </Form.Label>
            <Col sm={9}>
              <Form.File
                id="exampleFormControlFile1"
                name="screenshots"
                required
                multiple
                onChange={onChange}
              />
            </Col>
          </Form.Group>
        </Row>
        <Button variant="primary" className="btn-block" type="submit">
          {formState === "add" ? "Add Software" : "Update Software"}
        </Button>
      </Form>
    </Fragment>
  );
};

export default AddAndUpdateSoftware;
