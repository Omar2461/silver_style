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
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    addProduct: builder.mutation<Product[], Product>({
      query: (product) => {
        return {
          url: "/products",
          method: "POST",
          body: {
            id: product.id,
            name: product.name,
            categoryId: product.categoryId,
            typeId: product.typeId,
            price: product.price,
          },
        };
      },
    }),
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
