import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { DetailPage } from "../../pages/detail";
import { SignInPage } from "../../pages/signin";
import { SignUpPage } from "../../pages/signup";
import { PrivateRoute } from "./private";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/main"));
const FavoritesPage = lazy(() => import("../../pages/favorites"));
const HistoryPage = lazy(() => import("../../pages/history"));
const SearchPage = lazy(() => import("../../pages/search"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Oops...</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      //страница поиска, будет позже
      {
        path: "/history",
        element: (
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);
