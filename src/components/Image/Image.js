import React, { useState, forwardRef } from "react";
import Tiktok from "~/assets/images/Avatar.jpeg";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, width, height, ...props }, ref) => {
  const [fallBack, setFallBack] = useState("");

  const handleError = () => {
    setFallBack(Tiktok);
  };

  return (
    <img
      className={styles.wrapper}
      src={fallBack || src}
      alt={alt}
      onError={handleError}
      ref={ref}
      {...props}
    />
  );
});

export default Image;
