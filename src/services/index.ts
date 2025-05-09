import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, void>({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
