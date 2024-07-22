import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { SearchForm } from "../../../features/search/ui";
import { Logout } from "../../../features/logout";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link to="/">logo</Link>
      <SearchForm />
      {isAuth ? (
        <>
          <Link to="/favorites">Избранное</Link>
          <Link to="/history">История</Link>
          <Logout />
        </>
      ) : (
        <>
          <Link to="/signin">Войти</Link>
          <Link to="/signup">Зарегистрироваться</Link>
        </>
      )}
    </div>
  );
};
