import { request } from "~/utils/axiosInstance";

export const listComment = async (id) => {
  try {
    const res = await request.get(`videos/${id}/comments`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as commentService from "~/services/commentService";
