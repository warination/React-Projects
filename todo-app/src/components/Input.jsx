/* eslint-disable react/prop-types */
import { useRef } from "react";
import { CgAddR } from "react-icons/cg";
import styles from "./input.module.css";

function Input({ handleTask }) {
  const getName = useRef("");
  const getDate = useRef("");

  const handleAddTasks = () => {
    const newName = getName.current.value;
    const newDate = getDate.current.value;
    console.log(newName);
    getName.current.value = "";
    getDate.current.value = "";
    handleTask(newName, newDate);
  };

  return (
    <main className={`${styles.inputContainer} container `}>
      <div className={`${styles.input} row `}>
        <div className="col-5">
          <input
            className={styles.inputText}
            type="text"
            placeholder="Enter your task"
            ref={getName}
          />
        </div>
        <div className="col-4">
          <input className={styles.inputText} type="date" ref={getDate} />
        </div>
        <div className="col-3">
          <button
            className={`${styles.button} btn btn-success`}
            onClick={handleAddTasks}
          >
            <CgAddR />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Input;
