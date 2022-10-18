import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (url, options = {}) => {
  const response = await axiosInstance.get(url, options);
  return response.data;
};

export const post = async (url, data) => {
  const response = await axiosInstance.post(url, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export * as request from "~/utils/axiosInstance";

// axiosInstance.interceptors.request.use(function (config) {
//   config.headers.token = "Bearer " + localStorage.getItem("token");
//   return config;
// });
