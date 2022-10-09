import React, { useEffect, useRef } from "react";

function Video({ src, loop = false, muted = false, autoPlay = false }) {
  // play() failed because the user didn't interact with the document first

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   let options = {
  //     rootMargin: "0px",
  //     threshold: [0.25, 0.75],
  //   };

  //   let handlePlay = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         videoRef.current.play();
  //       } else {
  //         videoRef.current.pause();
  //       }
  //     });
  //   };

  //   let observer = new IntersectionObserver(handlePlay, options);

  //   observer.observe(videoRef.current);
  // });

  return (
    <video
      controls
      src={src}
      loop={loop}
      muted={muted}
      autoPlay
      // ref={videoRef}
    ></video>
  );
}

export default Video;
