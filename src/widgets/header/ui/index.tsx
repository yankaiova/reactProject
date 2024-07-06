import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";

export const Header = () => {
  const context = useContext(AuthContext);

  function signOut() {
    context?.setAuth();
  }

  return (
    <div>
      <Link to="/">logo</Link>
      {/* {search form} */}
      {context?.isAuth ? (
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
