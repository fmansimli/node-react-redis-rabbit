import React from "react";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAddressBook,
  faSearch,
  faAllergies,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage({ history }) {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div onClick={() => history.push("/tasks")}>
          <FontAwesomeIcon icon={faTasks} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faAllergies} size="2x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faAddressBook} size="2x" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightOne}>
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faAddressBook} size="2x" />
          </div>
        </div>
        <div className={styles.rightTwo}>
          <div>#134</div>
          <div>#134</div>
          <div>#134</div>
        </div>
      </div>
    </div>
  );
}
