import "./App.css";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "../../shared/context";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Заагрузка...</div>}>
        <ErrorBoundary fallback={<div>Ууупс...</div>}>
          <RouterProvider router={routes} />
        </ErrorBoundary>
      </Suspense>
    </AuthProvider>
  );
}
