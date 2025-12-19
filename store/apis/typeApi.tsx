import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Type = {
  id: number;
  name: string;
};

const typeApi = createApi({
  reducerPath: "types",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getTypes: builder.query<Type[], void>({
      query: () => "/types",
    }),
  }),
});

export const { useGetTypesQuery } = typeApi;
export { typeApi };
