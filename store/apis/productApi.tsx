import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  name: string;
  categoryId: number;
  typeId: number;
  price: number;
};

export type Category = {
  id: number;
};

const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], number[]>({
      query: (categoryIds) => {
        const params = new URLSearchParams();
        categoryIds.forEach((id) => params.append("categoryId", String(id)));

        return {
          url: `/products?${params.toString()}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

export { productsApi };
