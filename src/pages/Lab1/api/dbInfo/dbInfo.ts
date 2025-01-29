import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DataBase } from "@/pages/Lab1/model/model.ts";

export const dbInfo = createApi({
  reducerPath: "dbInfo",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/info/" }),
  endpoints: (builder) => ({
    getDBInfo: builder.query<DataBase, void>({ query: () => "database" }),
  }),
});

export const { useGetDBInfoQuery } = dbInfo;
