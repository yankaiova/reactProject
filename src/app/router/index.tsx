import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../widgets/layout/ui";
import { HomePage } from "../../pages/main";
import { DetailPage } from "../../pages/detail";
import { HistoryPage } from "../../pages/history";
import { SignInPage } from "../../pages/signin";
import { SignUpPage } from "../../pages/signup";
import { FavoritesPage } from "../../pages/favorites";
import { PrivateRoute } from "./private";

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
