export const getDataLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setDatalocalStorage = (key: string, data: string) => {
  localStorage.setItem(key, data);
};
