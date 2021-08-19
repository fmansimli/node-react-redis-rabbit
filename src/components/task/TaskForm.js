import React from "react";
import styles from "./TaskForm.module.scss";
import { useFormik } from "formik";
import { newTaskSchema } from "../validation";

const TaskForm = ({ sendTask, action, errMessage }) => {
  const handleCustomSubmit = (values) => {
    sendTask({ title: values.title, text: values.text });
    resetForm();
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    touched,
    values,
    errors,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { title: "", text: "" },
    onSubmit: handleCustomSubmit,
    validationSchema: newTaskSchema,
  });

  return (
    <div className={styles.cont}>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title:</label>
          <input
            className={styles.txtInput}
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <small className={styles.dngTxt}>
            {touched.title ? errors.title : ""}
          </small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="text">Content:</label>
          <textarea
            className={styles.txt}
            rows={10}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
            name="text"
          ></textarea>
          <small className={styles.dngTxt}>
            {touched.text ? errors.text : ""}
          </small>
        </div>

        <button className={styles.btn} type="submit">
          {isSubmitting ? "sending.." : action}
        </button>
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
