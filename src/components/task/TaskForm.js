import React from "react";
import styles from "./TaskForm.module.scss";

export default function TaskForm(props) {
  return (
    <div className={styles.cont}>
      <input className={styles.txt} type="text" />
      <button className={styles.btn}>add+</button>
    </div>
  );
}
