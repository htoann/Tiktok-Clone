import React from "react";
import styles from "./Error.module.scss";

function Error({ children }) {
  return <span className={styles.error}>{children}</span>;
}

export default Error;
