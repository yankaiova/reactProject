import { createSlice } from "@reduxjs/toolkit";

export interface FavoriteState {
  ids: number[];
  user: string | null;
}

const initialState: FavoriteState = {
  ids: [],
  user: null,
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.ids?.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.ids = state.ids?.filter((item) => item !== action.payload);
    },
    setFavorites: (state, action) => {
      state.ids = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
