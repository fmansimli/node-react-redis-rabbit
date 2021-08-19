import React, { useState } from "react";
import styles from "./Register.module.scss";
import { registerAsync } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../validation";

const Register = (props) => {
  const [errMessage, setErrMessage] = useState();
  const history = useHistory();

  const submitHandler = async (values) => {
    try {
      const resp = await registerAsync(
        values.username,
        values.email,
        values.password
      );
      if (resp.status === 204) {
        return history.push("/auth/login");
      }
      throw new Error("an error ocurred..");
    } catch (error) {
      setErrMessage(error.message);
    }
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: submitHandler,
      validationSchema: registerSchema,
    });

  return (
    <div className={styles.cont}>
      <h4>{props.title}</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            className={styles.txt}
            type="text"
            name="username"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <small className={styles.smText}>
            {touched.username ? errors.username : ""}
          </small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.txt}
            type="text"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <small className={styles.smText}>
            {touched.email ? errors.email : ""}
          </small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            className={styles.txt}
            type="password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <small className={styles.smText}>
            {touched.password ? errors.password : ""}
          </small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            className={styles.txt}
            type="password"
            name="passwordConfirm"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passwordConfirm}
          />
          <small className={styles.smText}>
            {touched.passwordConfirm ? errors.passwordConfirm : ""}
          </small>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
        <br />
        <small className={styles.smError}>{errMessage}</small>
      </form>
    </div>
  );
};

Register.defaultProps = {
  title: "Register...",
};
export default Register;
