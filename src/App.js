import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  console.log(taskList);

  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <h1 className="text-center py-5">Not to do List</h1>
        <AddTaskForm addTask={addTask} />
        <hr />
        {/* list component */}
        <ListArea taskList={taskList} />
      </Container>
    </div>
  );
};

export default App;
