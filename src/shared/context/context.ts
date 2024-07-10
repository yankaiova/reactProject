import { createContext } from "react";
type Props = { isAuth: boolean; setAuth: () => void };
export const AuthContext = createContext<Props>({
  isAuth: false,
  setAuth: () => {},
});
