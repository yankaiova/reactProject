import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/model/store";

export const getFavorites = (state: RootState) => state.favorites;

export const getFavoriteProducts = createSelector(getFavorites, (favorites) => {
  return favorites.ids;
});
