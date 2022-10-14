import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "~/services/userService";
import { config } from "~/config";

export const userLogin = createAsyncThunk(
  config.authApi.login,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await userService.login({
        email,
        password,
      });
      localStorage.setItem("token", data.meta.token);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
