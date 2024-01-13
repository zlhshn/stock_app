import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  loading: false,
  error: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user.username;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.data.username;
    },
    fetchFail: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { fetchStart, loginSuccess, registerSuccess, fetchFail } =
  authSlice.actions;

export default authSlice.reducer;
