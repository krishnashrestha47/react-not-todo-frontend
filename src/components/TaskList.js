import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({ title, tableColor, arrow }) => {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <div className="table mt-4">
        <Table striped bordered hover variant={tableColor}>
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Task</th>
              <th>Hour</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>Watching TV</td>
              <td>5 hrs</td>
              <td>
                {arrow === "right" ? (
                  <Button variant="success">
                    <i class="fa-solid fa-arrow-right"></i>
                  </Button>
                ) : (
                  <Button variant="danger">
                    <i class="fa-solid fa-arrow-left"></i>
                  </Button>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
