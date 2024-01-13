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
    },
    fetchFail:(state)=>{
        state.error=true
        state.loading=false
    }
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
