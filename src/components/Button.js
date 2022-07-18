import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  let classes = classNames("btn-wrapper", {
    "btn-primary": primary,
    "btn-outline": outline,
    "btn-large": large,
  });

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
