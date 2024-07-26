import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { removeUser } from "../lib/utils";
import { Button } from "@mui/material";

export const Logout = () => {
  const { setAuth, setUser } = useContext(AuthContext);

  function signOut() {
    setAuth();
    removeUser();
    setUser(null);
  }

  return (
    <Link to="/" onClick={signOut}>
      {" "}
      <Button>Выйти </Button>
    </Link>
  );
};
