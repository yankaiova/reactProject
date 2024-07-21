import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../shared/context";
import { getUserByEmail, setUser } from "../lib/utils";

export const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    let user = getUserByEmail(email);
    if (user) {
      const passwordUser = JSON.parse(user).password;
      if (passwordUser === password) {
        alert("Вход выполнен");
        setUser(email);
        setAuth();
        navigate("/");
      }
    } else {
      alert("Неверный email, такого не существует");
    }
  };

  return (
    <form>
      <h2>Вход</h2>
      <input
        name="email"
        type="email"
        placeholder="Введите Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        name="password"
        type="password"
        placeholder="Введите пароль"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>
        Войти
      </button>

      <span>
        Еще не зарегистрированы? <Link to={"/signup"}>Зарегистрироваться</Link>
      </span>
    </form>
  );
};
