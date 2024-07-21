import * as yup from "yup";

export const schema = yup.object({
  query: yup
    .string()
    .required("Введите поисковый запрос")
    .matches(/^[a-zA-Zа-яА-Я']*$/, "Только буквы"),
});
