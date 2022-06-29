import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";

const wklyHr = 7 * 24;
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

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

  const handleOnCheck = (e) => {
    const { checked, value, name } = e.target;
    console.log(checked, value, name);

    if (value === "entry" || value === "bad") {
      let toDeleteIds = [];
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item.id);
        }
      });

      //if ticked add all ids in array, or take them out
      if (checked) {
        // add all entry list ids
        setIds([...ids, ...toDeleteIds]);
      } else {
        const tempArgs = ids.filter((id) => !toDeleteIds.includes(id));
        setIds(tempArgs);
      }
    }
  };

  const handleOnDelete = () => {
    if (!window.confirm("Are you sure to delete?")) return;
    const tempArg = taskList.filter((item) => !ids.includes(item.id));
    setTaskList(tempArg);
    setIds([]);
  };

  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <h1 className="text-center py-5">Not to do List</h1>
        <AddTaskForm addTask={addTask} />
        <hr />
        {/* list component */}
        <ListArea
          ids={ids}
          taskList={taskList}
          switchTask={switchTask}
          total={total}
          handleOnCheck={handleOnCheck}
        />
        <div className="mt-2">
          {ids.length > 0 && (
            <Button variant="danger" onClick={handleOnDelete}>
              Delete
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default App;
