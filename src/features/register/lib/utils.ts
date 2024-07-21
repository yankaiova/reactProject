import { User } from "../../../shared/model/types";

export const registerUser = ({ email, password }: User) => {
  localStorage.setItem(email, JSON.stringify({ email, password }));
};
