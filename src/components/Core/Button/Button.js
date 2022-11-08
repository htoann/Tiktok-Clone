import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  large = false,
  disabled = false,
  children,
  onClick,
  className,
  leftIcon,
  rightIcon,
  noAction = false,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // Remove event listeners when the button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  }

  if (href) {
    props.href = href;
    Comp = "a";
  }

  if (noAction) {
    Comp = "div";
  }

  const classes = cx(styles.btn_wrapper, {
    [className]: className,
    [styles.btn_primary]: primary,
    [styles.btn_outline]: outline,
    [styles.btn_text]: text,
    [styles.btn_large]: large,
    [styles.disabled]: disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={styles.btn_icon}>{leftIcon}</span>}
      <span className={styles.btn_title}>{children}</span>
      {rightIcon && <span className={styles.btn_icon}>{rightIcon}</span>}
    </Comp>
  );
}

Button.prototype = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  noAction: PropTypes.bool,
};

export default Button;
