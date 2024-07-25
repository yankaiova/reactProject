import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../../entities/product/api/slice";
import favoritesReducer from "../../entities/favorite/model/slice";
import historyReducer from "../../entities/history/model/slice";
import { listenerMiddlewareHistory } from "../../entities/history/model/middleware";
import { listenerMiddlewareFavorites } from "../../entities/favorite";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    history: historyReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .prepend(
        listenerMiddlewareHistory.middleware,
        listenerMiddlewareFavorites.middleware
      ),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;