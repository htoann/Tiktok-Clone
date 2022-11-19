import React, { memo, useEffect, useState } from "react";
import styles from "./ListContentVideo.module.scss";
import { videosService } from "~/features/videos/services/videosService";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../components/Core/Loader";
import ContentVideo from "../ContentVideo";
import { fetchMoreVideos, setVideos } from "../../videoSlice";
import { useGetVideosQuery } from "~/services/videoApi";

function ListContentVideo({ type }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { videos } = useSelector((state) => state.video);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess } = useGetVideosQuery({
    type: type,
    page: page,
  });

  useEffect(() => {
    if (isSuccess) {
      const videos = data.data;
      dispatch(setVideos({ videos }));

      setPage((prev) => prev + 1);
    }
  }, [dispatch, videos, isSuccess, user, hasMore, page, type]);

  // const fetchListVideo = async () => {
  //   const result = await videosService.getListVideo(type, page);
  //   return result;
  // };

  const fetchData = async () => {
    // setPage((prev) => prev + 1);

    dispatch(fetchMoreVideos({ videos }));

    if (videos?.length === 0) {
      setHasMore(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.main_container}>
      <button onClick={() => fetchData()}>LLLLLLLLLLLL</button>
      {/* <InfiniteScroll
        dataLength={videos?.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<h4>End</h4>}
        style={{ overflow: "inherit" }}
      >
        {videos?.map((video) => (
          <div key={video.id}>
            <ContentVideo data={video} />
          </div>
        ))}
      </InfiniteScroll> */}
      {videos?.map((video) => (
        <div key={video.id}>
          <ContentVideo data={video} />
        </div>
      ))}
    </div>
  );
}

export default memo(ListContentVideo);
