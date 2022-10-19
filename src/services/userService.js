import { request } from "~/utils/axiosInstance";

export const register = async ({ email, password }) => {
  try {
    await request.post("auth/register", {
      email,
      password,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async ({ email, password }) => {
  return await request.post("auth/login", {
    email,
    password,
  });
};

// export const logout = () => {
//   localStorage.removeItem("user");
// };

export * as userService from "~/services/userService";
