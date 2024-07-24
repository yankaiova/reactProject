import {
  getDataLocalStorage,
  setDatalocalStorage,
} from "../../../shared/lib/utils";
export const getCurrentSearch = (user: string | null) => {
  return getDataLocalStorage(`currentSearch${user}`);
};
export const setCurrentSearch = (user: string | null, word: string) => {
  setDatalocalStorage(`currentSearch${user}`, word);
};
