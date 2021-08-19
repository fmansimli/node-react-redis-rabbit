import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../services/auth";
import { loginA } from "../../store/actions/auth";
import { useFormik } from "formik";
import { loginSchema } from "../validation";

const Login = (props) => {
  const [errMessage, setErrMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = async (values) => {
    try {
      const resp = await loginAsync(values.email, values.password);
      if (resp.status === 400) {
        throw new Error("username or password incorrect !!!");
      }
      if (resp.status === 500) {
        throw new Error("oops! an error ocurred!!!");
      }
      const data = await resp.json();

      dispatch(loginA(data));
      props.setToken(data.token);
      history.push(props.redirect);
    } catch (error) {
      setErrMessage(error.message);
    }
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit: submitHandler,
      validationSchema: loginSchema,
    });

  return (
    <div className={styles.cont}>
      <h4 style={{ color: props.titleColor }}>{props.title}</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            className={styles.txt}
            type="text"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
          />
          <small className={styles.smText}>
            {touched.email ? errors.email : ""}
          </small>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Password:</label>
          <input
            className={styles.txt}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <small className={styles.smText}>
            {touched.password ? errors.password : ""}
          </small>
        </div>
        <div className={styles.actions}>
          <button className={styles.btn} type="submit">
            Login
          </button>
          <Link to="/auth/register">do not have an account ?</Link>
        </div>
        <br />
        <small className={styles.smError}>{errMessage}</small>
      </form>
    </div>
  );
};

Login.defaultProps = {
  title: "Login..",
  redirect: "/",
  titleColor: "black",
};

export default Login;
