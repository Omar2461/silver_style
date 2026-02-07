import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Category = {
  _id: string;
  name: string;
  sizes: string[];
};

const categoryApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
    getCategoryById: builder.query<Category, string>({
      query: (id) => `/categories/${id}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
export { categoryApi };
