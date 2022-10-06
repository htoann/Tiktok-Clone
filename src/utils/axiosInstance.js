import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (url, options = {}) => {
  const response = await instance.get(url, options);
  return response.data;
};

export * as request from "~/utils/axiosInstance";
