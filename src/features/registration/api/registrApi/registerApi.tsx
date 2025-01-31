import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<
      { email: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),

      transformErrorResponse: (response: {
        status: number;
        data: { error?: string };
      }) => {
        if (response.status === 400) {
          return { message: response.data?.error || "Invalid credentials" };
        }
        return { message: "Register failed" };
      },
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
