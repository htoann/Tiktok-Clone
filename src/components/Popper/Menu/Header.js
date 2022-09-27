import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import styles from "~/static/sass/components/menu.module.scss";

function Header({ title, onBack }) {
  return (
    <header className={styles.header}>
      <button className={styles.back_btn} onClick={onBack}>
        <FaAngleLeft />
      </button>
      <h4 className={styles.header_title}>{title}</h4>
    </header>
  );
}

export default Header;
