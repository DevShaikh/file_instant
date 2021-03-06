import React, { Fragment, useState } from "react";

import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

const AddAndUpdateCategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const onChange = (e) => setCategoryName(e.target.value);

  return (
    <Fragment>
      <h4 className="my-4">Add new category</h4>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            value={categoryName}
            placeholder="Enter category name here..."
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default AddAndUpdateCategoryForm;
