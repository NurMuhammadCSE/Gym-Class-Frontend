// import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
// import { createApi } from "@reduxjs/toolkit/query/react";

// // Define a service using a base URL and expected endpoints
// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3001/api" }),
//   endpoints: () => ({}),
// });


import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    // Add the recentLostItems endpoint
    recentLostItems: builder.query({
      query: () => ({
        url: "/found-items",
        method: "GET",
      }),
    }),
  }),
});

// Export the auto-generated hook for the recentLostItems query
export const { useRecentLostItemsQuery } = baseApi;
