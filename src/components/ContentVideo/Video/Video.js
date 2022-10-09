import React, { useEffect, useRef } from "react";

function Video({ src, loop = false, muted = false, autoPlay = false }) {
  const videoRef = useRef(null);

  // Automatically Play and Pause video as it enters and leaves the viewport/screen
  
  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    };

    let handlePlay = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {
        const observer = new IntersectionObserver(handlePlay, options);
        observer.observe(videoRef.current);
      });
    }
  });

  return <video controls src={src} loop={loop} muted={muted} ref={videoRef} />;
}

export default Video;
