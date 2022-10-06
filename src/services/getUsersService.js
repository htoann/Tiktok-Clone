import { instance } from "~/utils/axiosInstance";

export const suggestedList = async (page = 1, perpage = 5) => {
  try {
    const res = await instance("users/suggested", {
      params: {
        page,
        per_page: perpage,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export * as getUsersService from "~/services/getUsersService";
