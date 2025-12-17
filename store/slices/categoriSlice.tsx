import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
