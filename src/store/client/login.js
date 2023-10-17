import { API } from "@/api/apiendpoint";
import axiosInstance from "@/api/interceptor";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };

      const response = await axiosInstance.post(
        API.login,
        { email, password },
        config
      );
      const { token, refreshToken, user } = response.data;
      localStorage.setItem("Token", token);
      localStorage.setItem("TokenRefresh", refreshToken);
      localStorage.setItem("Information", JSON.stringify(user));
      localStorage.setItem("role", user.role);

      return response;
    } catch (error) {
      toast(error.response ? error.response.data.message : error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return rejectWithValue(error.message);
    }
  }
);

//  local storage set information Data.....
const getUserToken = () => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem("user");
  }
  return "";
};
const getUserTokenRefresh = () => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem("userrefresh");
  }
  return "";
};
const getUserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem("userInfo");
  }
  return "";
};
const getCleintrole = () => {
  if (typeof window !== "undefined") {
    return localStorage?.getItem("userRole");
  }
  return "";
};

const initialState = {
  loading: false,
  userInfo: getUserInfo(),
  userToken: getUserToken(),
  userTokenRefresh: getUserTokenRefresh(),
  role: getCleintrole(),
  error: null,
  success: false,
};

const authLogin = createSlice({
  name: "LoginAuth",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
      state.userToken = payload.userTokenRefresh;
      state.role = payload.role;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authLogin.reducer;
