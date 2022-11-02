import React, { forwardRef } from "react";
import Avatar from "~/assets/images/Avatar.jpeg";
// import Tiktok from "~/assets/images/Tiktok2.png";
import PropTypes from "prop-types";

const Image = forwardRef(({ src, alt, width, height, ...props }, ref) => {
  return (
    <img
      style={{ overflow: "hidden", objectFit: "cover" }}
      src={src}
      alt={alt}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `${Avatar}`;
      }}
      ref={ref}
      {...props}
    />
  );
});

Image.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  ref: PropTypes.string,
};

export default Image;
