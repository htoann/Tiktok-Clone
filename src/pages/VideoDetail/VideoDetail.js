import React, { useEffect, useState } from "react";
import styles from "./VideoDetail.module.scss";
import { Link, useLocation } from "react-router-dom";
import { getVideosService } from "~/services/getVideosService";
import Loader from "~/components/Core/Loader";
import ListComment from "~/features/comment/components/ListComment";
import Tiktok2 from "~/assets/images/Tiktok2.png";
import Image from "~/components/Image";
import { config } from "~/config";
import { IoClose } from "react-icons/io5";

function VideoDetail() {
  const location = useLocation();
  const videoId = location.pathname.split("/")[2];

  const [video, setVideo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getVideosService.video(videoId);
      setVideo(result);

      setLoading(false);
    };

    fetchApi();
  }, [location.pathname]);

  return (
    <div>
      {!loading ? (
        <div className={styles.wrapper}>
          <div className={styles.video_container}>
            <img className={styles.blur} src={video.thumb_url} alt="" />
            <div className={styles.video_wrapper}>
              <div className={styles.video}>
                <Video data={video} />
              </div>
            </div>
            <Link to={config.routes.home}>
              <div className={styles.close_button}>
                <IoClose />
              </div>
              <div className={styles.home_button}>
                <Image src={Tiktok2} />
              </div>
            </Link>
          </div>
          <ListComment />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default VideoDetail;
