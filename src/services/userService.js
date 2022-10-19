import { config } from "~/config";
import { request } from "~/utils/axiosInstance";

export const register = async ({ email, password }) => {
  try {
    await request.post(config.authApi.register, {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async ({ email, password }) => {
  try {
    const res = await request.post(config.authApi.login, {
      email,
      password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export * as userService from "~/services/userService";
