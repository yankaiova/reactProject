import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addToHistory, clearHistory, removeFromHistory } from "../model/slice";
import { getUserHistory } from "../model/selectors";

export const useHistory = (user: string | null) => {
  const dispatch = useDispatch();
  const historyList = useSelector(getUserHistory);

  const addHistory = useCallback(
    (keyword: string) => {
      dispatch(addToHistory(keyword));
    },
    [dispatch, user, historyList]
  );

  const removeItemHistory = useCallback(
    (keyword: string) => {
      dispatch(removeFromHistory(keyword));
    },
    [dispatch, user, historyList]
  );

  const clearHistoryList = useCallback(() => {
    dispatch(clearHistory());
  }, [dispatch, user, historyList]);

  return {
    historyList,
    addHistory,
    clearHistoryList,
    removeItemHistory,
  };
};
