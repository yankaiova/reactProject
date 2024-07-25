import { createContext } from "react";
type Props = {
  isAuth: boolean;
  user: string | null;
  setAuth: () => void;
  setUser: (value: string | null) => void;
};
export const AuthContext = createContext<Props>({
  isAuth: false,
  user: null,
  setAuth: () => {},
  setUser: () => {},
});
