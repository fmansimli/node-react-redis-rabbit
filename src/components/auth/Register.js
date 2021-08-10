import React, { useState } from "react";
import styles from "./Register.module.scss";
import { registerAsync } from "../../services/auth";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    errMessage: "",
  });

  const history = useHistory();

  const validate = () => {
    let validation = true;
    if (email === "") {
      setErrors({ ...errors, email: "email is required!!!" });
      validation = false;
    }
    if (password === "") {
      setErrors({ ...errors, password: "password is required..!!" });
      validation = false;
    }
    if (username === "") {
      setErrors({ ...errors, username: "username is required..!!" });
      validation = false;
    }
    if (validation) {
      setErrors({ email: "", password: "", username: "", errMessage: "" });
    }
    return validation;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = validate();
    if (result) {
      try {
        await (await registerAsync(username, email, password)).json();
        history.push("/auth/login");
      } catch (error) {
        setErrors({ ...errors, errMessage: "an error ocurred.." });
      }
    }
  };
  return (
    <div className={styles.cont}>
      <h4>{props.title}</h4>
      <hr />
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            className={styles.txt}
            type="text"
            name="username"
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />
          <small className={styles.smText}>{errors.username}</small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.txt}
            type="text"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className={styles.smText}>{errors.email}</small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            className={styles.txt}
            type="password"
            name="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className={styles.smText}>{errors.password}</small>
        </div>
        <button className={styles.btn} onClick={submitHandler}>
          Register
        </button>
        <br />
        <small className={styles.smError}>{errors.errMessage}</small>
      </form>
    </div>
  );
};

Register.defaultProps = {
  title: "Register...",
};
export default Register;
