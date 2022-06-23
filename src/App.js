import { Button, Container } from "react-bootstrap";
import "./App.css";
import { AddTaskForm } from "./components/AddTaskForm";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        {/* form component */}
        <h1 className="text-center py-5">Not to do List</h1>
        <AddTaskForm />
        {/* list component */}
      </Container>
    </div>
  );
};

export default App;
