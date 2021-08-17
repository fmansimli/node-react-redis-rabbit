import React from "react";
import styles from "./RegisterPage.module.scss";

import Register from "../../components/auth/Register";

export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <Register />
      </div>
      <div className={styles.right}>
        <div>{"/* Life runs on Code */"}</div>
      </div>
    </div>
  );
}
