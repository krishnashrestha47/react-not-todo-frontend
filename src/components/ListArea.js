import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ taskList, switchTask, total }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");
  const totalBadHours = badList.reduce((acc, item) => acc + +item.hr, 0);

  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            tableColor="dark"
            arrow={"right"}
            title={"Task List"}
            list={entryList}
            switchTask={switchTask}
          />
        </Col>
        <Col>
          <TaskList
            tableColor="warning"
            title={"Bad Task List"}
            list={badList}
            switchTask={switchTask}
          />
          <div className="text-end text-warning fw-bold">
            You could have saved {totalBadHours} hrs !!
          </div>
        </Col>
      </Row>
      <div className="fw-bold text-white">
        Total time allocated is {total} hrs/wk
      </div>
    </div>
  );
};
