import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../../entities/product/api/slice";
import favoriteReducer from "../../entities/favorite/model/slice";
import historyReducer from "../../entities/history/model/slice";
import { listenerMiddlewareHistory } from "../../entities/history/model/middleware";
import { listenerMiddlewareFavorites } from "../../entities/favorite/model/middleware";
//может позже перенесу стор в другую папку
export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
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
