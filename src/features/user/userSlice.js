import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userLogout, userRegister } from "./userAction";

// initialize TOKEN from local storage
const userJson = localStorage.getItem("user");
const user = JSON.parse(userJson)?.data || null;
const token = JSON.parse(userJson)?.meta.token || null;

const initialState = {
  loading: false,
  user: user,
  token: token,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    // Register user
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.success = true;
      state.token = payload.token;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // Login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.token = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [userLogout.fulfilled]: (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
