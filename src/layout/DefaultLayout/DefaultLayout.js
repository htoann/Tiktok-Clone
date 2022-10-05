import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className={styles.default_layout}>
      <Navbar />
      <div className={styles.container}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
