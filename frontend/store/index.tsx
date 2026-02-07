import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./apis/categoruApi";
import { typeApi } from "./apis/typeApi";
import { productsApi } from "./apis/productApi";
import cartSlice from "./cartSlice"
import { addToCart } from "./cartSlice";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [typeApi.reducerPath]: typeApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartSlice.reducerPath]:cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoryApi.middleware)
      .concat(typeApi.middleware)
      .concat(productsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetCategoriesQuery, useGetCategoryByIdQuery } from "./apis/categoruApi";

export { useGetTypesQuery } from "./apis/typeApi";

export { useGetProductsQuery,useGetProductByIdQuery,useAddProductMutation } from "./apis/productApi";

export {addToCart}


