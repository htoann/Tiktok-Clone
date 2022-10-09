import React, { useEffect, useRef } from "react";

function Video({ src, loop = false, muted = false, autoPlay = false }) {
<<<<<<< HEAD
  // Automatically Play and Pause video as it enters and leaves the viewport/screen
=======
  // play() failed because the user didn't interact with the document first

>>>>>>> 720fd1513965c45e661f17ae7b9c584c7c4466ee
  const videoRef = useRef(null);

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

  return (
    <video
      controls
      src={src}
      loop={loop}
      muted={muted}
      autoPlay={autoPlay}
      ref={videoRef}
      disablePictureInPicture
      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
    />
  );
}

export default Video;
