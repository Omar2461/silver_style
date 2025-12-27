import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./apis/categoruApi";
import { typeApi } from "./apis/typeApi";
import { productsApi } from "./apis/productApi";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(typeApi.middleware)
      .concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetCategoriesQuery } from "./apis/categoruApi";

export { useGetTypesQuery } from "./apis/typeApi";

export { useGetProductsQuery,useAddProductMutation } from "./apis/productApi";
