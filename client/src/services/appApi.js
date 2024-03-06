import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000/api";
// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const appApi = createApi({
  reducerPath: "AppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //Create User---------------------------------------
    createUser: builder.mutation({
      query: ({ body, concept }) => ({
        url: `/${concept}/create_user`,
        method: "post",
        body,
      }),
    }),

    //Checkout
    checkout: builder.mutation({
      query: ({ body, concept }) => ({
        url: `/${concept}/stripe/create-checkout-session`,
        method: "post",
        body,
      }),
    }),

    //Stay Informed---------------------------------------
    addSubscriber: builder.mutation({
      query: ({ body }) => ({
        url: `/subscribe/add`,
        method: "post",
        body,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCheckoutMutation,
  useAddSubscriberMutation,
} = appApi;
