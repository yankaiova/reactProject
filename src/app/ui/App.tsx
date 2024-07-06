import "./App.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
export function App() {
  return <RouterProvider router={routes} />;
}
