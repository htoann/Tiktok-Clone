import React from "react";
import styles from "./Popper.module.scss";
import PropTypes from "prop-types";

function Wrapper({ children }) {
  return <div className={styles.popper_wrapper}>{children}</div>;
}

Wrapper.prototype = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
