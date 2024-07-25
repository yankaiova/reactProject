import { getDataLocalStorage } from "../lib/utils";
import { AuthContext } from "./context";
import { useState, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const localUser = getDataLocalStorage("user");
  const [user, setUser] = useState<string | null>(localUser || null);
  const [isAuth, setIsAuth] = useState<boolean>(Boolean(localUser));
  const setAuth = () => {
    setIsAuth((prev) => !prev);
  };
  const value = { isAuth, setAuth, user, setUser };
  const memoizedValue = useMemo(() => value, [value]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};
