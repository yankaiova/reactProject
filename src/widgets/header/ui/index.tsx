import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";

export const Header = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  function signOut() {
    setAuth();
  }

  return (
    <div>
      <Link to="/">logo</Link>
      {/* {search form} */}
      {isAuth ? (
        <>
          <Link to="/favorites">Избранное</Link>
          <Link to="/history">Истории</Link>
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
