import {
  getDataLocalStorage,
  setDatalocalStorage,
} from "../../../shared/lib/utils";

export const saveClearHistory = () => {
  localStorage.removeItem(`history${getDataLocalStorage("user")}`);
};
export const getHistorybyEmail = (email: string | null) => {
  return getDataLocalStorage(`history${email}`);
};

export const createHistory = (email: string | null, word: string) => {
  const history = { history: [word] };
  setDatalocalStorage(`history${email}`, JSON.stringify(history));
};

export const saveHistoryPush = (email: string | null, word: string) => {
  const storage = getHistorybyEmail(email);
  if (storage && JSON.parse(storage).history.length > 0) {
    const history = JSON.parse(storage);
    history.history = history.history.filter((item: string) => item !== word);
    history.history.push(word);
    setDatalocalStorage(`history${email}`, JSON.stringify(history));
  } else {
    createHistory(email, word);
  }
};
export const saveHistoryRemove = (email: string | null, word: string) => {
  const storage = getHistorybyEmail(email);
  if (storage && JSON.parse(storage).history.length > 0) {
    const history = JSON.parse(storage);
    history.history = history.history.filter((item: string) => item !== word);
    setDatalocalStorage(`history${email}`, JSON.stringify(history));
  } else {
    saveClearHistory();
  }
};
export const getCurrentSearch = (user: string | null) => {
  return getDataLocalStorage(`currentSearch${user}`);
};
export const saveCurrentSearch = (user: string | null, word: string) => {
  setDatalocalStorage(`currentSearch${user}`, word);
};
export const getCurrentUser = () => {
  return getDataLocalStorage(`user`);
};
