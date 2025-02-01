import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "@/pages/Lab2/models/types/types.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/auth/" }),
  endpoints: (builder) => ({
    getUserData: builder.query<IUser, void>({ query: () => "me" }),
    checkAuth: builder.query({ query: () => "revoke-all" }),
  }),
});

export const { useGetUserDataQuery, useCheckAuthQuery } = userApi;
