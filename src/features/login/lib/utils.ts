export const getUserByEmail = (email: string) => {
  const dataAboutUser = localStorage.getItem(email);
  return dataAboutUser;
};

export const setUser = (email: string) => {
  localStorage.setItem("user", email);
};
