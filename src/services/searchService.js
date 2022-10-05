import * as request from "~/utils/axiosInstance";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
