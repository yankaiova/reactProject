import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addToHistory } from "../model/slice";
import { getHistory } from "../model/selectors";

type Props = { user: string | null };

export const useHistory = ({ user }: Props) => {
  const dispatch = useDispatch();
  const historyList = useSelector(getHistory);

  const addHistory = useCallback(
    (keyword: string) => {
      dispatch(addToHistory(keyword));
    },
    [dispatch, user, historyList]
  );

  return { historyList, addHistory };
};
