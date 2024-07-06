import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context";

type props = { children: React.ReactNode };

export const PrivateRoute = ({ children }: props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.isAuth) {
      navigate("/signin");
    }
  }, [context?.isAuth, navigate]);

  if (context?.isAuth) return <>{children}</>;
};
