import React, { Fragment } from "react";

import { popularSoftwaresData } from "./SoftwaresData";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";

const PopularSoftwares = () => {
  return (
    <Fragment>
      <h4>Popular Softwares</h4>
      <div className="admin_popular_softwares">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Version</th>
              <th>Category</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {popularSoftwaresData.map((soft, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{soft.title}</td>
                <td>{soft.version}</td>
                <td>{soft.category}</td>
                <td>{soft.date}</td>
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
    </Fragment>
  );
};

export default PopularSoftwares;
