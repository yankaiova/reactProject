import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../../entities/product/api/slice";
import favoriteReducer from "../../entities/favorite/model/slice";
//может позже перенесу стор в другую папку
export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
setupListeners(store.dispatch);
