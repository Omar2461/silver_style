import { configureStore } from "@reduxjs/toolkit";
// import { categoryReducer } from "./slices/categoriSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./apis/categoruApi";

export const store = configureStore({
  reducer: {
    // categories: categoryReducer,
    [categoryApi.reducerPath]:categoryApi.reducer
  },
  middleware:(getDefaultMiddleware)=>{
 return getDefaultMiddleware().concat(categoryApi.middleware)
  }
});

setupListeners(store.dispatch)

export {useGetCategoriesQuery} from './apis/categoruApi';