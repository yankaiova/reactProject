import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  saveHistoryPush,
  saveHistoryRemove,
  saveCurrentSearch,
  getCurrentUser,
  saveClearHistory,
} from "../lib/utils";
import {
  clearHistory,
  addToHistory,
  removeFromHistory,
  setCurrentSearch,
} from "./slice";

export const listenerMiddlewareHistory = createListenerMiddleware();

listenerMiddlewareHistory.startListening({
  actionCreator: clearHistory,
  effect: async () => {
    saveClearHistory();
  },
});
listenerMiddlewareHistory.startListening({
  actionCreator: addToHistory,
  effect: async (action) => {
    saveHistoryPush(getCurrentUser(), action.payload);
  },
});
listenerMiddlewareHistory.startListening({
  actionCreator: removeFromHistory,
  effect: async (action) => {
    saveHistoryRemove(getCurrentUser(), action.payload);
  },
});
listenerMiddlewareHistory.startListening({
  actionCreator: setCurrentSearch,
  effect: async (action) => {
    saveCurrentSearch(getCurrentUser(), action.payload);
  },
});
