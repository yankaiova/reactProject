import { AuthContext } from "./context";
import { useState } from "react";
type props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const setAuth = () => {
    setIsAuth((prev) => !prev);
  };
  return (
    <AuthContext.Provider value={{ isAuth, setAuth, user: "yana" }}>
      {children}
    </AuthContext.Provider>
  );
};
