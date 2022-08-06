import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
  hr: 0,
  type: "entry",
};
export const AddTaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask(form);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="gap-2 d-flex justify-content-center">
        <Col md="6">
          <Form.Control
            name="task"
            onChange={handleOnChange}
            placeholder="Task name"
            required
          />
        </Col>
        <Col md="3">
          <Form.Control
            name="hr"
            onChange={handleOnChange}
            placeholder="10"
            required
            type="number"
          />
        </Col>
        <Col md="2">
          <Button className="add-task-btn" type="submit" variant="dark">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
