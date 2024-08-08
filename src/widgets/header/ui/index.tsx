import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { SearchForm } from "../../search";
import { Logout } from "../../../features/logout";
import { Button } from "@mui/material";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "1%",
        border: "1px solid darkblue",
        padding: "20px",
      }}
    >
      <Link to="/">
        {" "}
        <Button>logo </Button>
      </Link>
      <SearchForm />
      {isAuth ? (
        <>
          <Link to="/favorites">
            <Button>Избранное </Button>
          </Link>
          <Link to="/history">
            <Button>История </Button>
          </Link>
          <Logout />
        </>
      ) : (
        <>
          <Link to="/signin">
            {" "}
            <Button>Войти </Button>
          </Link>
          <Link to="/signup">
            {" "}
            <Button>Зарегистрироваться </Button>
          </Link>
        </>
      )}
    </div>
  );
};
