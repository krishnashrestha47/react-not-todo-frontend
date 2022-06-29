import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({
  taskList,
  switchTask,
  total,
  handleOnCheck,
  ids,
}) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");
  const totalBadHours = badList.reduce((acc, item) => acc + +item.hr, 0);

  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            ids={ids}
            tableColor="dark"
            name={"entry"}
            arrow={"right"}
            title={"Task List"}
            list={entryList}
            switchTask={switchTask}
            handleOnCheck={handleOnCheck}
          />
        </Col>
        <Col>
          <TaskList
            ids={ids}
            tableColor="warning"
            name={"bad"}
            title={"Bad Task List"}
            list={badList}
            switchTask={switchTask}
            handleOnCheck={handleOnCheck}
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
