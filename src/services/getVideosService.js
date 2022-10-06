import { request } from "~/utils/axiosInstance";

export const listVideo = async (type = "for-you", page = 1) => {
  try {
    const res = await request.get("videos", {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as getVideosService from "~/services/getVideosService";
