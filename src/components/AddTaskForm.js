import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddTaskForm = () => {
  return (
    <Form>
      <Row className="gap-2">
        <Col className="col-12 col-md-6">
          <Form.Control placeholder="Task name" required />
        </Col>
        <Col className="col-12 col-md-3">
          <Form.Control placeholder="10" required type="number" />
        </Col>
        <Col className="col-12 col-md-2">
          <Button type="submit" variant="info">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
