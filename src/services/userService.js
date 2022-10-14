import { request } from "~/utils/axiosInstance";

export const login = async ({ email, password }) => {
  try {
    const res = await request.post("auth/login", {
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export * as userService from "~/services/userService";
