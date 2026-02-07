import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Product = {
  _id: string;
  name: string;
  categoryId: string;
  typeId: number;
  price: number;
  description?: string;
  image: string;
};

type GetProductsArgs = {
  categoryIds?: string[];
  typeIds?: number;
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
        categoryIds?.forEach((id) => params.append("categoryId", id));

        if(typeIds!==undefined){
          params.append("typeId", String(typeIds));
        }
        return {
          url: `/products?${params}`,
        };
      },
    }),
    getProductById: builder.query<Product, string>({
      query: (_id) => {
        return {
          url: `/products/${_id}`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery,useGetProductByIdQuery,useAddProductMutation } = productsApi;

export { productsApi };
