import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api`;

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

    //Get User Assessment Info---------------------------------------
    getUserAssessmentInfo: builder.query({
      query: ({ id, concept, name }) => ({
        url: `/user/get_assessment_info?concept=${concept}&name=${name}&id=${id}`,
        method: "get",
      }),
    }),

    //Stay Informed---------------------------------------
    addSubscriber: builder.mutation({
      query: ({ body }) => ({
        url: `/subscribe/create`,
        method: "post",
        body,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useCheckoutMutation,
  useGetUserAssessmentInfoQuery,
  useAddSubscriberMutation,
} = appApi;
