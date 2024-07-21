import { useState } from "react";
import { registerUser } from "../lib/utils";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    registerUser({ email, password });
    navigate("/signin");
  };

  return (
    <form>
      <h2>Регистрация</h2>
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
        Зарегистрироваться
      </button>
    </form>
  );
};
