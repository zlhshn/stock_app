import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
  firms: [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getStockSucces: (state, { payload }) => {
      state[payload.url] = payload.apiData;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getStockSucces, fetchFail } = stockSlice.actions;

export default stockSlice.reducer;
