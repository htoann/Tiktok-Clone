import React, { useEffect, useRef, useState } from "react";
import styles from "./ContentVideo.module.scss";

function Video({
  src,
  loop = false,
  muted = false,
  autoPlay = false,
  time,
  poster,
}) {
  // Automatically Play and Pause video as it enters and leaves the viewport/screen
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  const handleShowControls = () => {
    setShowControls(true);
  };

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: [0.6, 0.75],
    };

    const handlePlay = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
          }
        }
      });
    };

    let playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          const observer = new IntersectionObserver(handlePlay, options);
          observer.observe(videoRef.current);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <video
      className={time < 30 ? styles.video_short : ""}
      controls={showControls}
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      ref={videoRef}
      disablePictureInPicture
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      onMouseEnter={handleShowControls}
      poster={poster}
    />
  );
}

export default Video;
