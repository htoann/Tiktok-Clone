import React from "react";
import styles from "./Popper.module.scss";

function Wrapper({ children }) {
  return <div className={styles.popper_wrapper}>{children}</div>;
}

export default Wrapper;
