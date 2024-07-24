import { getDataLocalStorage } from "../lib/utils";
import { AuthContext } from "./context";
import { useState } from "react";
type props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: props) => {
  const localUser = getDataLocalStorage("user");

  const [isAuth, setIsAuth] = useState<boolean>(Boolean(localUser));
  const setAuth = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuth, setAuth, user: localUser }}>
      {children}
    </AuthContext.Provider>
  );
};
