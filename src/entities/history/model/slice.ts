import { createSlice } from "@reduxjs/toolkit";
import { getDataLocalStorage } from "../../../shared/lib/utils";
import { getCurrentSearch } from "../lib/utils";

export interface HistoryState {
  history: string[];
  currentSearch: string;
  user: string | null;
}

const initialState: HistoryState = {
  history: [],
  currentSearch: getCurrentSearch(getDataLocalStorage("user")) || "",
  user: null,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.history = state.history.filter((item) => item !== action.payload);
      state.history?.push(action.payload);
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    clearHistory: (state) => {
      state.history.length = 0;
    },
    removeFromHistory(state, action) {
      state.history = state.history.filter((item) => item !== action.payload);
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setCurrentSearch(state, action) {
      state.currentSearch = action.payload;
    },
  },
});

export const {
  addToHistory,
  clearHistory,
  setHistory,
  setUser,
  removeFromHistory,
  setCurrentSearch,
} = historySlice.actions;

export default historySlice.reducer;
