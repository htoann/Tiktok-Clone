import React, { forwardRef } from "react";
import Tiktok from "~/assets/images/Tiktok.png";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, width, height, ...props }, ref) => {
  return (
    <img
      className={styles.wrapper}
      src={src}
      alt={alt}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `${Tiktok}`;
      }}
      ref={ref}
      {...props}
    />
  );
});

export default Image;
