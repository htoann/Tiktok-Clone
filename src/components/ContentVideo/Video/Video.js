import React, { useEffect, useRef } from "react";

function Video({ src, loop = false, muted = false, autoPlay = false }) {
  // Automatically Play and Pause video as it enters and leaves the viewport/screen
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: [0.6, 0.75],
    };

    const handlePlay = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          0;
        } else {
          videoRef.current.currentTime = 0;
          videoRef.current.pause();
        }
      });
    };

    let playPromise = videoRef.current.play();
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
