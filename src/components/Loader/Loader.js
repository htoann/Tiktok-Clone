import React from "react";
import styles from "./Loader.module.scss";
import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className={styles.wrapper}>
      <FaSpinner className={styles.spinner} />
    </div>
  );
}

export default Loader;
