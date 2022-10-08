import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

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

Header.prototype = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Header;
