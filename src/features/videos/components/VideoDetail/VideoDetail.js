import React from "react";
import styles from "./VideoDetail.module.scss";
import Video from "../Video";
import ListComment from "~/features/comments/components/ListComment";

function VideoDetail({ video }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video_container}>
        <img className={styles.blur} src={video.thumb_url} alt="" />
        <div className={styles.video_wrapper}>
          <div className={styles.video}>
            <Video data={video} />
          </div>
        </div>
      </div>
      <ListComment video={video} />
    </div>
  );
}

export default VideoDetail;
