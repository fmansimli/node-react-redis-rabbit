import React, { useState } from "react";
import styles from "./TaskForm.module.scss";

const TaskForm = ({ sendTask, action, errMessage }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [textErr, setTextErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      sendTask({ title, text });
      setText("");
      setTitle("");
    }
  };

  const validate = () => {
    setTitleErr("");
    setTextErr("");
    let val = true;
    if (!title || title.length < 3) {
      setTitleErr("title length should be minimum 3..");
      val = false;
    }
    if (!text || text.length < 3) {
      setTextErr("content length should be minimum 3 ..");
      val = false;
    }

    return val;
  };

  return (
    <div className={styles.cont}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            className={styles.txtInput}
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <small className={styles.dngTxt}>{titleErr}</small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="text">Content:</label>
          <textarea
            className={styles.txt}
            rows={10}
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <small className={styles.dngTxt}>{textErr}</small>
        </div>

        <button className={styles.btn}>{action}</button>
        <br />
        <small className={styles.dngTxt}>{errMessage}</small>
      </form>
    </div>
  );
};
TaskForm.defaultProps = {
  action: "ADD",
};

export default TaskForm;
