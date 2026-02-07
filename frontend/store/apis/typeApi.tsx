import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Type = {
  _id: string;
  name: string;
};

const typeApi = createApi({
  reducerPath: "types",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getTypes: builder.query<Type[], void>({
      query: () => "/types",
    }),
  }),
});

export const { useGetTypesQuery } = typeApi;
export { typeApi };
