import { User } from "../../../shared/model/types";
export const checkRegister = ({ email, password }: User) => {
  return localStorage.getItem(email);
};
export const registerUser = ({ email, password }: User) => {
  localStorage.setItem(email, JSON.stringify({ email, password }));
};
