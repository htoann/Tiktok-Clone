import React, { useEffect, useRef, useState } from "react";
import styles from "../components/ContentVideo/ContentVideo.module.scss";

function Video({ data, onMouseEnter, onMouseLeave }) {
  // Automatically Play and Pause video as it enters and leaves the viewport/screen
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const videoTime = data.meta?.playtime_seconds;

  const handleShowControls = () => {
    setShowControls(true);
  };

  const handlePauseVideo = () => {
    videoRef.current.pause();
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
          return;
        });
    }
  }, []);

  return (
    <video
      className={videoTime < 30 ? styles.video_short : ""}
      controls={showControls}
      src={data.file_url}
      loop
      muted
      autoPlay
      ref={videoRef}
      disablePictureInPicture
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
      onMouseEnter={handleShowControls}
      poster={data.thumb_url}
      onClick={handlePauseVideo}
    />
  );
}

export default Video;