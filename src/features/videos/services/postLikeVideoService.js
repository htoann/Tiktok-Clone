import { request } from "~/utils/axiosInstance";

export const like = async (id) => {
  try {
    const res = await request.post(`videos/${id}/like`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unlike = async (id) => {
  try {
    const res = await request.post(`videos/${id}/unlike`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as likeService from "~/features/videos/services/postLikeVideoService";
