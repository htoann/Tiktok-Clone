import axios from "axios";
import authHeader from "~/services/authHeader";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: authHeader(),
});

export const get = async (url, options = {}) => {
  try {
    const response = await axiosInstance.get(url, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const post = async (url, data, options = {}) => {
  try {
    const response = await axiosInstance.post(url, data, options);
    return response.data;
  } catch (err) {
    window.location.href = "/login";
    console.log(err);
  }
};

export * as request from "~/utils/axiosInstance";

// axiosInstance.interceptors.request.use(function (config) {
//   config.headers.token = "Bearer " + localStorage.getItem("token");
//   return config;
// });
