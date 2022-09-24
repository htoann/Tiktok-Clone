import React from "react";
import styles from "~/static/sass/components/popper.module.scss";

function PopperWrapper({ children }) {
  return <div className={styles.popper_wrapper}>{children}</div>;
}

export default PopperWrapper;
