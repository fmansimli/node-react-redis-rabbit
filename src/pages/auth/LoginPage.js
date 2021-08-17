import React from "react";
import styles from "./LoginPage.module.scss";

import useToken from "../../hooks/useToken";

import Login from "../../components/auth/Login";

export default function LoginPage(props) {
  const { setToken } = useToken();
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <Login setToken={setToken} />
      </div>
      <div className={styles.right}>
        <div>{"/* Life runs on Code */"}</div>
      </div>
    </div>
  );
}
