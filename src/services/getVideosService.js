import { request } from "~/utils/axiosInstance";

export const listVideo = async (type = "for-you", page = 1) => {
  try {
    const res = await request.get("videos?type=for-you&page=1", {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export * as getVideosService from "~/services/getVideosService";
