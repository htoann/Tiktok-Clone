import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  loading: false,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    fetchMoreVideos: (state, action) => {
      const nextListVideo = action.payload;
      const { videos } = state;
      state.videos = [...videos, ...nextListVideo];
    },
  },
});

export const { setVideos, fetchMoreVideos } = videoSlice.actions;
export default videoSlice.reducer;
