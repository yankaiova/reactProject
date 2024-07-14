import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../shared/model/types";

export interface FavoriteState {
  products: Product[];
  user: string | null;
}

const initialState: FavoriteState = {
  products: [],
  user: null,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.products?.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.products = state.products?.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setFavorites: (state, action) => {
      state.products = action.payload.products;
      state.user = action.payload.user;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
