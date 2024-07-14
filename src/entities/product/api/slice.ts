import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductFromApi } from "../../../shared/model/types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProductsAll: builder.query<Product[], void>({
      query: () => "/products",
      transformResponse: (res: ProductFromApi): Product[] => {
        return res.products;
      },
    }),
    getProductbyId: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getProductByName: builder.query<Product, string>({
      query: (name) => `/products/search?q=${name}`,
    }),
  }),
});
