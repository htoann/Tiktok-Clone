import { request } from "~/utils/axiosInstance";

export const suggestedList = async (page = 1, per_page = 15) => {
  try {
    const res = await request.get("users/suggested", {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export * as getUsersService from "~/services/getUsersService";
