import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({
  title,
  tableColor,
  arrow,
  name,
  ids,
  list = [],
  switchTask,
  handleOnCheck,
}) => {
  return (
    <div>
      <h2 className="text-center">{title}</h2>
      <div className="table mt-4">
        <Table striped bordered hover variant={tableColor}>
          <thead>
            <tr>
              <th>
                <Form.Check value={name} onChange={handleOnCheck} />
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
                    <Form.Check
                      onChange={handleOnCheck}
                      value={item._id}
                      checked={ids.includes(item._id)}
                    />
                  </td>
                  <td>{item.task}</td>
                  <td>
                    {item.hr} {item.hr > 1 ? "hrs" : "hr"}
                  </td>
                  <td>
                    {arrow === "right" ? (
                      <Button
                        onClick={() => switchTask(item._id, "bad")}
                        variant="success"
                      >
                        <i className="fa-solid fa-arrow-right btn-sm"></i>
                      </Button>
                    ) : (
                      <Button
                        variant="danger"
                        onClick={() => switchTask(item._id, "entry")}
                      >
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
