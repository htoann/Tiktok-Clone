import { request } from "~/utils/axiosInstance";

export const follow = async (id) => {
  try {
    const res = await request.post(`users/${id}/follow`, id);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unFollow = async (id) => {
  try {
    const res = await request.post(`users/${id}/unfollow`, id);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as followService from "~/services/followService";