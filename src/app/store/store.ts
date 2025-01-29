import { configureStore } from "@reduxjs/toolkit";
import { dbInfo } from "@/pages/Lab1/api/dbInfo/dbInfo.ts";

export const store = configureStore({
  reducer: {
    [dbInfo.reducerPath]: dbInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dbInfo.middleware),
});
