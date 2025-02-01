import { configureStore } from "@reduxjs/toolkit";
import { dbInfo } from "@/pages/Lab1/api/dbInfo/dbInfo.ts";
import { authApi } from "@/features/auth/api/authApi/authApi.ts";
import { registerApi } from "@/features/registration/api/registrApi/registerApi.tsx";
import { userApi } from "@/pages/Lab2/api/userApi/userApi.ts";
import authReducer from "@/pages/Lab2/slice/slice.ts";

export const store = configureStore({
  reducer: {
    [dbInfo.reducerPath]: dbInfo.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dbInfo.middleware,
      authApi.middleware,
      registerApi.middleware,
      userApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
