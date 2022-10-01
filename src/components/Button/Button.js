import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Button.module.scss";

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
  } else if (href) {
    props.href = href;
    Comp = "a";
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

export default Button;
