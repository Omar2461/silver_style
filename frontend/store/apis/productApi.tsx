import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  id: number;
  name: string;
  categoryId: number;
  typeId: number;
  price: number;
  description?: string;
};

type GetProductsArgs = {
  categoryIds?: number[];
  typeIds?: number;
}; 

// export type Category = {
//   id: number;
// };

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
            name: product.name,
            categoryId: product.categoryId,
            typeId: product.typeId,
            price: product.price,
          },
        };
      },
    }),
    getProducts: builder.query<Product[], GetProductsArgs>({
      query: ({categoryIds,typeIds}) => {
        const params = new URLSearchParams();
        categoryIds?.forEach((id) => params.append("categoryId", String(id)));

        if(typeIds!==undefined){
          params.append("typeId", String(typeIds));
        }
        return {
          url: `/products?${params.toString()}`,
        };
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => {
        return {
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery,useGetProductByIdQuery,useAddProductMutation } = productsApi;

export { productsApi };
