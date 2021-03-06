import React, { Fragment } from "react";

import Table from "react-bootstrap/esm/Table";
import Button from "react-bootstrap/esm/Button";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { staffs } from "./StaffsData";

const StaffsTable = () => {
  return (
    <Fragment>
      <h4 className="my-4">Staffs List</h4>
      <Table striped bordered hover size="sm" className="staff_table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Username</th>
            <th>Roles</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((staff, key) => (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{staff.email}</td>
              <td>{staff.username}</td>
              <td>{staff.roles.join(" | ")}</td>
              <td>{staff.date}</td>
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
    </Fragment>
  );
};

export default StaffsTable;
