import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import styles from "./HeaderSidebar.module.scss";
import PropTypes from "prop-types";

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
