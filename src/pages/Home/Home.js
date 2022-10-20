import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { getVideosService } from "~/services/getVideosService";
import ContentVideo from "../../components/ContentVideo";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "~/components/Loader";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.user);
  const [listVideo, setListVideo] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getListVideo = async () => {
      const result = await getVideosService.listVideo();
      setListVideo(result);
    };

    getListVideo();
  }, [user]);

  const fetchListVideo = async () => {
    const result = await getVideosService.listVideo("for-you", page);
    return result;
  };

  const fetchData = async () => {
    const listVideoNext = await fetchListVideo();

    setListVideo([...listVideo, ...listVideoNext]);
    if (listVideoNext.length === 0) {
      setHasMore(false);
    }
    setPage((prev) => prev + 1);
  };

  return (
    <div className={styles.main_container}>
      <InfiniteScroll
        dataLength={listVideo.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<h4>End</h4>}
      >
        {listVideo.map((video) => (
          <div key={video.id}>
            <ContentVideo data={video} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default Home;
