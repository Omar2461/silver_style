import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Category = {
  id: number;
  name: string;
};

const categoryApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
    }),
  }),
  //   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  //   endpoints(builder) {
  //     return {
  //       fetchCategories: builder.query({
  //         query: () => {
  //           return {
  //             url: "/categories",
  //             method: "GET",
  //           };
  //         },
  //       }),
  //     };
  //   },
});

export const { useGetCategoriesQuery  } = categoryApi;
export { categoryApi };
