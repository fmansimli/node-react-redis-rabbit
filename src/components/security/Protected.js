import React from "react";
import { Route } from "react-router-dom";
import styles from "./Protected.module.scss";

import Login from "../auth/Login";
import useToken from "../../hooks/useToken";

const Protected = ({ component, path, ...rest }) => {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <div className={styles.page}>
        <div className={styles.login}>
          <Login
            setToken={setToken}
            title={`Login to continue (Protected Page)`}
            titleColor="red"
            redirect={path}
          />
        </div>
      </div>
    );
  }

  return <Route {...rest} component={component} />;
};

export default Protected;
