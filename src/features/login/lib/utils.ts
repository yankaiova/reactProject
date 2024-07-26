export const getUserByEmail = (email: string) => {
  return localStorage.getItem(email);
};

export const saveCurrentUser = (email: string) => {
  localStorage.setItem("user", email);
};
