import { configureStore } from "@reduxjs/toolkit";
import { dbInfo } from "@/pages/Lab1/api/dbInfo/dbInfo.ts";
import { authApi } from "@/features/auth/api/authApi/authApi.ts";
import { registerApi } from "@/features/registration/api/registrApi/registerApi.tsx";

export const store = configureStore({
  reducer: {
    [dbInfo.reducerPath]: dbInfo.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dbInfo.middleware,
      authApi.middleware,
      registerApi.middleware,
    ),
});
