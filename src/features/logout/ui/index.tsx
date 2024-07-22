import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { removeUser } from "../lib/utils";

export const Logout = () => {
  const { setAuth } = useContext(AuthContext);

  function signOut() {
    setAuth();
    removeUser();
  }

  return (
    <Link to="/" onClick={signOut}>
      Выйти
    </Link>
  );
};
