import React from "react";
import styles from "./HeaderOnly.module.scss";
import PropTypes from "prop-types";
import Navbar from "~/layouts/Navbar";

function HeaderOnly({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

HeaderOnly.prototype = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
