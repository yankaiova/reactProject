import "./App.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../../shared/context";
export function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}
