import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/model/store";

export const getHistory = (state: RootState) => state.history;

export const getUserHistory = createSelector(getHistory, (history) => {
  return history.history;
});
export const getUserSearch = createSelector(getHistory, (history) => {
  return history.currentSearch;
});
