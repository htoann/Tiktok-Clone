import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";

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

export default DefaultLayout;
