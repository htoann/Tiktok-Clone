import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "~/static/sass/layout/DefaultLayout.module.scss";

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
