import React from "react";
import styles from "./TaskList.module.scss";

import TaskItem from "./TaskItem";

export default function TaskList(props) {
  return (
    <div className={styles.list}>
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}
