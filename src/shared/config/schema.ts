import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().required("Введите email"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(8, "Минимум 8 символов")
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
      "Неверный формат, хотя бы одна маленькая и большая буквы, цифра и спец символ !@#$%^&*"
    ),
});
