import React from "react";
import Button from "~/components/Button";
import styles from "~/static/sass/components/menuItem.module.scss";

function MenuItem({ data }) {
  return (
    // <Button
    //   className={styles.navbar_right_dropdown_inner_text}
    //   to={data.to}
    //   leftIcon={data.icon}
    // >
    //   {data.title}
    // </Button>
    <li className={styles.menu_item} to={data.to} leftIcon={data.icon}>
      {data.title}
    </li>
  );
}

export default MenuItem;
