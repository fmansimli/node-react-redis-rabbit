import React from "react";
import styles from "./TaskItem.module.scss";

import { delTask, doneTask } from "../../sockets/taskSocket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function TaskItem({ title, text, _id, done }) {
  const handleDelete = () => {
    if (window.confirm("do you want to delete ??")) {
      delTask(_id);
    }
  };

  const handleDone = () => {
    if (done) {
      return;
    }
    doneTask(_id);
  };

  return (
    <div className={styles.taskItem} draggable>
      <div style={{ textDecoration: done ? "line-through" : "none" }}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.buttons}>
        <FontAwesomeIcon
          icon={faCheckCircle}
          color="blue"
          border={true}
          size="2x"
          className={styles.ico}
          onClick={handleDone}
        />
        <FontAwesomeIcon
          icon={faEdit}
          color="green"
          border={true}
          size="2x"
          className={styles.ico}
        />
        <FontAwesomeIcon
          icon={faTrash}
          border={true}
          size="2x"
          color="red"
          className={styles.ico}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
