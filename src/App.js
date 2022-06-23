import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";

const wklyHr = 7 * 24;
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const total = taskList.reduce((acc, item) => acc + +item.hr, 0);

  const addTask = (task) => {
    if (total + +task.hr > wklyHr) {
      return alert("Your input hour exceeds the allowed hours ");
    }
    setTaskList([...taskList, task]);
  };

  const switchTask = (id, type) => {
    console.log(id, type);
    const switchedArg = taskList.map((item, index) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(switchedArg);
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
        <ListArea taskList={taskList} switchTask={switchTask} total={total} />
      </Container>
    </div>
  );
};

export default App;
