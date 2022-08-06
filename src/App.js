import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";
import {
  deleteTask,
  fetchTasks,
  postTask,
  switchServerTask,
} from "./helpers/axiosHelper";

const wklyHr = 7 * 24;
const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getTaskFromServer();
  }, []);

  const getTaskFromServer = async () => {
    const data = await fetchTasks();
    data.status === "success" && setTaskList(data.result);
  };

  const total = taskList.reduce((acc, item) => acc + +item.hr, 0);

  const addTask = async (task) => {
    if (total + +task.hr > wklyHr) {
      return alert("Your input hour exceeds the allowed hours ");
    }
    //send the data to the server
    const result = await postTask(task);
    result.status === "success" && getTaskFromServer();
  };

  const switchTask = async (_id, type) => {
    const data = await switchServerTask({ _id, type });
    data.status === "success" && getTaskFromServer();
  };

  console.log(taskList);

  const handleOnCheck = (e) => {
    const { checked, value, name } = e.target;
    console.log(checked, value, name);

    if (value === "entry" || value === "bad") {
      let toDeleteIds = [];
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item._id);
        }
      });

      //if ticked add all ids in array, or take them out
      if (checked) {
        // add all entry list ids
        setIds([...ids, ...toDeleteIds]);
      } else {
        const tempArgs = ids.filter((_id) => !toDeleteIds.includes(_id));
        setIds(tempArgs);
      }
      return;
    }
    //individual item check
    if (checked) {
      setIds([...ids, value]);
    } else {
      setIds(ids.filter((_id) => _id !== value));
    }
  };

  const handleOnDelete = async () => {
    if (!window.confirm("Are you sure to delete?")) return;

    const result = await deleteTask(ids);
    if (result.status === "success") {
      setIds([]);
      getTaskFromServer();
    }
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
