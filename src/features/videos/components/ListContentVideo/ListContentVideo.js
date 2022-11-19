import React, { memo, useEffect, useState } from "react";
import styles from "./ListContentVideo.module.scss";
import { videosService } from "~/features/videos/services/videosService";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Core/Loader";
import ContentVideo from "../ContentVideo";

function ListContentVideo({ type }) {
  const { user } = useSelector((state) => state.user);
  const [listVideo, setListVideo] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const getListVideo = async () => {
      const result = await videosService.getListVideo(type);
      setListVideo(result);
    };

    getListVideo();
  }, [user]);

  const fetchListVideo = async () => {
    const result = await videosService.getListVideo(type, page);
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
        style={{ overflow: "inherit" }}
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

export default memo(ListContentVideo);
