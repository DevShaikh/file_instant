import React, { Fragment } from "react";

import { latestSoftwaresData } from "./SoftwaresData";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";

const LatestSoftwares = () => {
  return (
    <Fragment>
      <h4>Latest Softwares</h4>
      <div className="admin_latest_softwares">
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
            {latestSoftwaresData.map((soft, key) => (
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

export default LatestSoftwares;
