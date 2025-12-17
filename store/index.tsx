import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./slices/categoriSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});


