import React from "react";
import styles from "./ProfilePage.module.scss";
import useToken from "../../hooks/useToken";
import { useSelector } from "react-redux";

import Login from "../../components/auth/Login";

export default function ProfilePage() {
  const { token, setToken } = useToken();
  const user = useSelector((state) => state.auth.user);

  if (!token) {
    return (
      <div className={styles.login}>
        <div className={styles.loginChild}>
          <Login
            title="Please login to visit (Profile page)"
            setToken={setToken}
          />
        </div>
        <br />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <p>{user.username}</p>
      </div>
      <div className={styles.right}>right section...</div>
    </div>
  );
}
