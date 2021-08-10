import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Login.module.scss";

import { useDispatch } from "react-redux";
import { loginAsync } from "../../services/auth";
import { loginA } from "../../store/actions/auth";

const Login = (props) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    errMessage: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
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
    if (validation) {
      setErrors({ email: "", password: "", errMessage: "" });
    }
    return validation;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = validate();
    if (result) {
      try {
        const resp = await loginAsync(email, password);
        if (resp.status === 400) {
          throw new Error("username or password incorrect !!!");
        }
        if (resp.status === 500) {
          throw new Error("oops! an error ocurred!!!");
        }
        const data = await resp.json();

        dispatch(loginA(data));
        props.setToken(data.token);
        history.push("/account/profile");
      } catch (error) {
        setErrors({ ...errors, errMessage: error.message });
      }
    }
  };

  return (
    <div className={styles.cont}>
      <h4>{props.title}</h4>
      <form>
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
          <label htmlFor="email">Password:</label>
          <input
            className={styles.txt}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className={styles.smText}>{errors.password}</small>
        </div>
        <button className={styles.btn} onClick={submitHandler}>
          Login
        </button>
        <br />
        <small className={styles.smError}>{errors.errMessage}</small>
      </form>
    </div>
  );
};

Login.defaultProps = {
  title: "Login..",
};

export default Login;
