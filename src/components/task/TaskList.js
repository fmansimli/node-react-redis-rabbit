import React from "react";
import styles from "./TaskList.module.scss";

import TaskItem from "./TaskItem";

export default function TaskList(props) {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer);
  };

  return (
    <div
      className={styles.list}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {props.tasks.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          text={task.text}
          done={task.done}
          _id={task._id}
        />
      ))}
      {props.tasks.length === 0 ? (
        <div className={styles.msg}>No Tasks...</div>
      ) : (
        ""
      )}
    </div>
  );
}
