import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const user = getState().user;

      if (user && endpoint !== "refresh") {
        headers.set("Authorization", `Bearer ${user.token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getVideo: builder.query({
      query: (id) => `videos/${id}`,
    }),
    getVideos: builder.query({
      query: (arg) => {
        const { type, page } = arg;
        return {
          url: "videos",
          params: { type, page },
        };
      },
    }),
  }),
});

export const { useGetVideoQuery, useGetVideosQuery } = videoApi;
