import React from "react";
import styles from "./Home.module.scss";

import TaskList from "../components/task/TaskList";
import TaskForm from "../components/task/TaskForm";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.child} style={{ width: "15%" }}>
        test1
      </div>
      <div className={styles.child} style={{ flex: 1 }}>
        <div className={styles.task}>
          <TaskList />
          <TaskForm />
        </div>
        <div className={styles.task}>test3</div>
      </div>
    </div>
  );
}
