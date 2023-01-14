import { request } from "~/utils/axiosInstance";

export const getListVideo = async (type = "for-you", page = 1) => {
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

export const getVideo = async (id) => {
  try {
    const res = await request.get(`videos/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postVideo = async (formData) => {
  try {
    await request.post("videos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteVideo = async (id) => {
  try {
    await request.remove(`videos/${id}`);
  } catch (err) {
    console.log(err);
  }
};

export * as videosService from "~/features/videos/services/videosService";
