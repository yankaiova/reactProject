export const getUserByEmail = (email: string) => {
  return localStorage.getItem(email);
};

export const setUserInLocal = (email: string) => {
  localStorage.setItem("user", email);
};
