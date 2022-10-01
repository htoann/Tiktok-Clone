import React from "react";
import Button from "~/components/Button/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, separate }) {
  const classes = cx(styles.menu_item, {
    [styles.separate]: data.separate,
  });

  return (
    <Button
      className={classes}
      to={data.to}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
