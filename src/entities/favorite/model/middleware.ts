import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  addToFavoritesInLocal,
  removeFromFavoritesInLocal,
} from "../lib/utils";
import { addToFavorites, removeFromFavorites } from "./slice";
import { getDataLocalStorage } from "../../../shared/lib/utils";

export const listenerMiddlewareFavorites = createListenerMiddleware();

listenerMiddlewareFavorites.startListening({
  actionCreator: addToFavorites,
  effect: async (action) => {
    addToFavoritesInLocal(getDataLocalStorage("user"), action.payload);
  },
});
listenerMiddlewareFavorites.startListening({
  actionCreator: removeFromFavorites,
  effect: async (action) => {
    removeFromFavoritesInLocal(getDataLocalStorage("user"), action.payload);
  },
});
