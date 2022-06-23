import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({ title, tableColor, arrow, list = [] }) => {
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
            {list.map((item, i) => {
              return (
                <tr>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td>{item.task}</td>
                  <td>
                    {item.hr} {item.hr > 1 ? "hrs" : "hr"}
                  </td>
                  <td>
                    {arrow === "right" ? (
                      <Button variant="success">
                        <i className="fa-solid fa-arrow-right btn-sm"></i>
                      </Button>
                    ) : (
                      <Button variant="danger">
                        <i className="fa-solid fa-arrow-left btn-sm"></i>
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
