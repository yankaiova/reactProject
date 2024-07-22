import { schema } from "../../../shared/config/schema";
import { checkRegister, registerUser } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { InputForm } from "../../../shared/ui/inputForm";
import { User } from "../../../shared/model/types";

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (data: User) => {
    if (checkRegister(data)) {
      alert("Вы уже зарегитсрированы");
    } else {
      registerUser(data);
      navigate("/signin");
    }
  };

  return (
    <Box>
      <h2>Регистрация</h2>
      <InputForm
        schema={schema}
        onSubmit={handleSubmit}
        eventSubmit="Зарегистрироваться"
      />
    </Box>
  );
};
