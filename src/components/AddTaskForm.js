import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddTaskForm = () => {
  return (
    <Form>
      <Row className="gap-2 d-flex justify-content-center">
        <Col md="5">
          <Form.Control placeholder="Task name" required />
        </Col>
        <Col md="4">
          <Form.Control placeholder="10" required type="number" />
        </Col>
        <Col md="2">
          <Button type="submit" variant="dark">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
