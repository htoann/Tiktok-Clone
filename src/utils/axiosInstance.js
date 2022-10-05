import axios from "axios";

export const instance = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const get = async (url, options = {}) => {
  const response = await instance.get(url, options);

  return response.data;
};

export * as request from "~/utils/axiosInstance";
