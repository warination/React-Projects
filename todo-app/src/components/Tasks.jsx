/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { ImSad2 } from "react-icons/im";
import { ImHappy2 } from "react-icons/im";
import styles from "./tasks.module.css";

function Tasks({ tasks, handleDelete, toggleCompleted }) {
  return (
    <ul className="list-group container mt-2">
      {tasks.map((task, i) => (
        <li
          key={i}
          className={` list-group-item ${styles.listBgColor} ${styles.container}`}
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.name)}
            />
          </div>
          <div className={task.completed ? "text" : " "}>{task.name}</div>
          <div>{task.date}</div>
          <div>{task.completed ? <ImHappy2 /> : <ImSad2 />}</div>
          <div>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(task.name)}
            >
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
