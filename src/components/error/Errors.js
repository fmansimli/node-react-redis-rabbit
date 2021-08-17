import React from "react";
import Error from "./Error";

import styles from "./Errors.module.scss";

const Errors = (props) => {
  return (
    <div className={styles.cont}>
      {props.errors.map((error, key) => (
        <Error message={error.message} key={key} />
      ))}
    </div>
  );
};

export default Errors;
