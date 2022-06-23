import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ taskList }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");

  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            tableColor="dark"
            arrow={"right"}
            title={"Task List"}
            list={entryList}
          />
        </Col>
        <Col>
          <TaskList tableColor="warning" title={"Bad Task List"} />
          <div className="text-end text-warning fw-bold">
            You could have saved 40 hrs !!
          </div>
        </Col>
      </Row>
      <div className="fw-bold text-white">
        Total time allocated is 55 hrs/wk
      </div>
    </div>
  );
};
