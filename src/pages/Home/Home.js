import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { getVideosService } from "~/services/getVideosService";
import ContentVideo from "../../components/ContentVideo/ContentVideo";

function Home() {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getVideosService.listVideo();
      setListVideo(result);
    };

    fetchApi();
  }, []);

  return (
    <div className={styles.main_container}>
      {listVideo.map((video) => (
        <div key={video.id}>
          <ContentVideo data={video} />
        </div>
      ))}
    </div>
  );
}

export default Home;
