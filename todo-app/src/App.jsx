import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTask = (newName, newDate) => {
    const task = [{ name: newName, date: newDate, completed: false }, ...tasks];
    setTasks(task);
  };

  const handleDelete = (name) => {
    const task = tasks.filter((task) => task.name !== name);
    setTasks(task);
  };

  function toggleCompleted(name) {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <Header />
      <Input handleTask={handleTask} />
      <Tasks
        tasks={tasks}
        handleDelete={handleDelete}
        toggleCompleted={toggleCompleted}
      />
    </>
  );
}

export default App;
