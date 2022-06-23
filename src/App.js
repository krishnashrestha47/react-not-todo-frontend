import { Button, Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <h1 className="text-center py-5">Not to do List</h1>
        <AddTaskForm />
        <hr />
        {/* list component */}
        <ListArea />
      </Container>
    </div>
  );
};

export default App;
