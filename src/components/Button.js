import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
// import styles from "~/static/sass/components/button.module.scss";
import "~/static/sass/components/button.scss";

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

  let classes = classNames("btn_wrapper", {
    [className]: className,
    btn_primary: primary,
    btn_outline: outline,
    btn_text: text,
    btn_large: large,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className="btn_icon">{leftIcon}</span>}
      <span className="btn_title">{children}</span>
      {rightIcon && <span className="btn_icon">{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
