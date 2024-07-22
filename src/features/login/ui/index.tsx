import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { getUserByEmail, setUser } from "../lib/utils";
import { Box } from "@mui/material";
import { InputForm } from "../../../shared/ui/inputForm";
import { schema } from "../../../shared/config/schema";
import { type User } from "../../../shared/model/types";

export const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (data: User) => {
    const user = getUserByEmail(data.email);
    if (user) {
      const passwordUser = JSON.parse(user).password;
      if (passwordUser === data.password) {
        alert("Вход выполнен");
        setUser(data.email);
        setAuth();
        navigate("/");
      }
    } else {
      alert("Неверный email, такого не существует");
    }
  };

  return (
    <Box>
      <h2>Вход</h2>
      <InputForm schema={schema} onSubmit={handleSubmit} eventSubmit="Войти" />
      <div>
        Еще не зарегистрированы? <Link to={"/signup"}>Зарегистрироваться</Link>
      </div>
    </Box>
  );
};
