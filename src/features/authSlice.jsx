import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  loading: "",
  error: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart:(state)=>{
        state.loading=true
    },
    loginSuccess:(state,{payload})=>{
        state.loading=false
        state.token=payload.token
        state.user=payload.user.username
    },
    fetchFail:(state)=>{
        state.error=true
        state.loading=false
    }
  },
});

export const {fetchStart,loginSuccess,fetchFail} = authSlice.actions;

export default authSlice.reducer;
