import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3000/api";
// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const appApi = createApi({
  reducerPath: "AppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //Mindset---------------------------------------
    createMindsetUser: builder.mutation({
      query: ({ body }) => ({
        url: `/mindset/create_user`,
        method: "post",
        body,
      }),
    }),
    //Strategy---------------------------------------
    createStrategyUser: builder.mutation({
      query: ({ body }) => ({
        url: `/strategy/create_user`,
        method: "post",
        body,
      }),
    }),
    // //Founders---------------------------------------
    // createFounder: builder.mutation({
    //   query: ({ body }) => ({
    //     url: `/founders/founder_create`,
    //     method: "post",
    //     body,
    //   }),
    // }),
    // checkout: builder.mutation({
    //   query: ({ body }) => ({
    //     url: "/stripe/create-checkout-session",
    //     method: "post",
    //     body,
    //   }),
    // }),
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
  useCreateMindsetUserMutation,
  useCreateStrategyUserMutation,
  useAddSubscriberMutation,
} = appApi;
