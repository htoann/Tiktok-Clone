import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  nextVideos: [],
  loading: false,
  page: 1,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload.videos;
    },
    fetchMoreVideos: (state, action) => {
      state.videos = [...state.videos, ...state.nextVideos];
    },
  },
});

export const { setVideos, fetchMoreVideos } = videoSlice.actions;
export default videoSlice.reducer;
