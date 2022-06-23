import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = () => {
  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList />
        </Col>
        <Col>
          <TaskList />
        </Col>
      </Row>
    </div>
  );
};
