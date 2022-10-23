import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

function Tab({ to, children, Icon, className, onClick }) {
  return (
    <Link to={to} className={className} onClick={onClick}>
      <Icon className={styles.sidebar_icon} />
      <h2 className={styles.sidebar_title}>{children}</h2>
    </Link>
  );
}

export default Tab;
