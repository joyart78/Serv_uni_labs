import { createBrowserRouter } from "react-router-dom";
import Layout from "@/widgets/Layout/Layout.tsx";
import NotFound from "@/pages/NotFound/NotFound.tsx";
import Lab1 from "@/pages/Lab1/Lab1.tsx";
import Lab2 from "@/pages/Lab2/Lab2.tsx";
import LoginForm from "@/features/auth";
import RegisterForm from "@/features/registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/lab1", element: <Lab1 /> },
      {
        path: "/lab2",
        element: <Lab2 />,
      },
      {
        path: "/auth",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);
