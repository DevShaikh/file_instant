import React, { Fragment } from "react";

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import { categoriesData } from "./CategoriesData";
import AddAndUpdateCategoryForm from "./AddAndUpdateCategoryForm";

const Categories = () => {
  return (
    <Fragment>
      <div className="row">
        <h4>Softwares Categories</h4>
        <div className="admin_software_categories my-2">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categoriesData.map((category, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.date}</td>
                  <td width="100px">
                    <div className="d-flex">
                      <Button variant="secondary" className="mx-2">
                        <FaEdit />
                      </Button>
                      <Button variant="danger" className="mx-2">
                        <AiFillDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="row">
        <AddAndUpdateCategoryForm />
      </div>
    </Fragment>
  );
};

export default Categories;
