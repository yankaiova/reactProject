import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context";

type props = { children: React.ReactNode };

export const PrivateRoute = ({ children }: props) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth,navigate]);

  if (isAuth) return <>{children}</>;
};
