import { request } from "~/utils/axiosInstance";

export const getSearch = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as searchService from "~/services/searchService";
