import React from "react";
import Button from "~/components/Core/Button";
import styles from "./Menu.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
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

MenuItem.prototype = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
