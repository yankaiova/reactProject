import {
  getDataLocalStorage,
  setDatalocalStorage,
} from "../../../shared/lib/utils";

export const getFavoritesbyEmail = (email: string | null) => {
  return getDataLocalStorage(`favorites${email}`);
};

export const saveAddedFavorites = (email: string | null, id: number) => {
  const storage = getFavoritesbyEmail(email);
  if (storage && JSON.parse(storage).favorites.length > 0) {
    const favorites = JSON.parse(storage);
    favorites.favorites.push(id);
    setDatalocalStorage(`favorites${email}`, JSON.stringify(favorites));
  } else {
    const favorites = { favorites: [id] };
    setDatalocalStorage(`favorites${email}`, JSON.stringify(favorites));
  }
};

export const saveRemovedFavorites = (email: string | null, id: number) => {
  const storage = getFavoritesbyEmail(email);
  if (storage && JSON.parse(storage).favorites.length > 0) {
    const favorites = JSON.parse(storage);
    favorites.favorites = favorites.favorites.filter(
      (item: number) => item !== id
    );
    setDatalocalStorage(`favorites${email}`, JSON.stringify(favorites));
  } else {
    localStorage.removeItem(`favorites${getDataLocalStorage("user")}`);
  }
};
