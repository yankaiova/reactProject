import { createSelector } from "@reduxjs/toolkit";

export const getHistory = (state) => state.history;

export const getUserHistory = createSelector(getHistory, (history) => {
  return history.history;
});
