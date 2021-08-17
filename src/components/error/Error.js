import React from "react";
import styles from "./Error.module.scss";
const Error = (props) => {
  return (
    <div className={styles.error}>
      <span>{props.message}</span>
    </div>
  );
};

export default Error;
