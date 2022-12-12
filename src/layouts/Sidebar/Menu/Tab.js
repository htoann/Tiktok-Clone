import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";

function Tab({ to, children, Icon, onClick }) {
  return (
    <NavLink
      to={to}
      className={(nav) =>
        nav.isActive
          ? `${styles.sidebar_tab} ${styles.sidebar_active}`
          : styles.sidebar_tab
      }
      onClick={onClick}
    >
      <Icon className={styles.sidebar_icon} />
      <h2 className={styles.sidebar_title}>{children}</h2>
    </NavLink>
  );
}

export default Tab;
