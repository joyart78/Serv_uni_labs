import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { accessToken: string; refreshToken: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),

      transformErrorResponse: (response: {
        status: number;
        data: { error?: string };
      }) => {
        if (response.status === 401) {
          return { message: response.data?.error || "Invalid credentials" };
        }
        return { message: "Login failed" };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
