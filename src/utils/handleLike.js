import { likeService } from "~/features/videos/services/postLikeVideoService";

const handleLikeFunc = async (video) => {
  let newVideo;
  if (video && video.is_liked) {
    newVideo = await likeService.unlike(video.id);
  } else {
    newVideo = await likeService.like(video.id);
  }

  return newVideo;
};

export default handleLikeFunc;
