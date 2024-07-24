import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  addToHistoryInLocal,
  clearHistoryInLocal,
  removeFromHistoryInLocal,
} from "../lib/utils";
import { clearHistory, addToHistory, removeFromHistory } from "./slice";
import { getDataLocalStorage } from "../../../shared/lib/utils";

export const listenerMiddlewareHistory = createListenerMiddleware();

listenerMiddlewareHistory.startListening({
  actionCreator: clearHistory,
  effect: async () => {
    clearHistoryInLocal();
  },
});
listenerMiddlewareHistory.startListening({
  actionCreator: addToHistory,
  effect: async (action) => {
    addToHistoryInLocal(getDataLocalStorage("user"), action.payload);
  },
});
listenerMiddlewareHistory.startListening({
  actionCreator: removeFromHistory,
  effect: async (action) => {
    removeFromHistoryInLocal(getDataLocalStorage("user"), action.payload);
  },
});
