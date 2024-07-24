import {
  getDataLocalStorage,
  setDatalocalStorage,
} from "../../../shared/lib/utils";

export const clearHistoryInLocal = () => {
  localStorage.removeItem(`history${getDataLocalStorage("user")}`);
};
export const getHistoryinLocal = (email: string | null) => {
  return getDataLocalStorage(`history${email}`);
};

export const createHistoryInLocal = (email: string | null, word: string) => {
  const history = { history: [word] };
  setDatalocalStorage(`history${email}`, JSON.stringify(history));
};

export const addToHistoryInLocal = (email: string | null, word: string) => {
  const storage = getHistoryinLocal(email);
  if (storage && JSON.parse(storage).history.length > 0) {
    const history = JSON.parse(storage);
    history.history.push(word);
    setDatalocalStorage(`history${email}`, JSON.stringify(history));
  } else {
    createHistoryInLocal(email, word);
  }
};
export const removeFromHistoryInLocal = (
  email: string | null,
  word: string
) => {
  const storage = getHistoryinLocal(email);
  if (storage && JSON.parse(storage).history.length > 0) {
    const history = JSON.parse(storage);
    history.history = history.history.filter((item: string) => item !== word);
    setDatalocalStorage(`history${email}`, JSON.stringify(history));
  } else {
    clearHistoryInLocal();
  }
};
