import { createContext } from "react";
type props = { isAuth: boolean; setAuth: () => void };
export const AuthContext = createContext<props | null>(null);
//включить ошибку лучше при отсутствии контекста или исключить само отсутствие контекста в будущем
