import { createSelector } from "@reduxjs/toolkit";

export const getFavorites = (state) => state.favorites;

export const getFavoriteProducts = createSelector(getFavorites, (favorites) => {
  return favorites.ids;
});
