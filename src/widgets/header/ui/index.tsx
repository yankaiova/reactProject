import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { SearchForm } from "../../../features/search/ui";

export const Header = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  function signOut() {
    setAuth();
  }

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">logo</Link>
      <SearchForm />
      {isAuth ? (
        <>
          <Link to="/favorites">Избранное</Link>
          <Link to="/history">История</Link>
          <Link to="/" onClick={signOut}>
            Выйти
          </Link>
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
