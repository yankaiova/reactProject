import { createListenerMiddleware } from "@reduxjs/toolkit";
import { saveAddedFavorites, saveRemovedFavorites } from "../lib/utils";
import { addToFavorites, removeFromFavorites } from "./slice";
import { getDataLocalStorage } from "../../../shared/lib/utils";

export const listenerMiddlewareFavorites = createListenerMiddleware();

listenerMiddlewareFavorites.startListening({
  actionCreator: addToFavorites,
  effect: async (action) => {
    saveAddedFavorites(getDataLocalStorage("user"), action.payload);
  },
});
listenerMiddlewareFavorites.startListening({
  actionCreator: removeFromFavorites,
  effect: async (action) => {
    saveRemovedFavorites(getDataLocalStorage("user"), action.payload);
  },
});
