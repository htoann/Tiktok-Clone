import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Video from "~/components/Video/Video";
import { getVideosService } from "~/services/getVideosService";

function Home() {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getVideosService.listVideo();
      setListVideo(result);
    };

    fetchApi();
  }, []);

  console.log(listVideo);

  return (
    <div className={styles.home}>
      <div className={styles.main_container}>
        {listVideo.map((video) => (
          <div key={video.id}>
            <Video data={video} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
