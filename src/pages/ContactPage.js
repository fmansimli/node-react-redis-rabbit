import React from "react";
import styles from "./ContactPage.module.scss";

import GifLoading from "../components/common/GifLoading";
export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h2>Contact Page...</h2>
      <p>this page is contact page..</p>
      <hr />
      <GifLoading />
    </div>
  );
}
