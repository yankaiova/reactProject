import { createSlice } from "@reduxjs/toolkit";

export interface HistoryState {
  history: string[];
  user: string | null;
}

const initialState: HistoryState = {
  history: [],
  user: null,
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.history?.push(action.payload);
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    clearHistory: (state) => {
      state.history.length = 0;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { addToHistory, clearHistory, setHistory, setUser } =
  historySlice.actions;

export default historySlice.reducer;