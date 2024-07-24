import { useContext, useEffect } from "react";
import { useHistory } from "../../entities/history/lib/useHistory";
import { AuthContext } from "../../shared/context";
import { ClearButton } from "../../features/clear-history";
import { Button } from "@mui/material";
import { getHistoryinLocal } from "../../entities/history/lib/utils";
import { useDispatch } from "react-redux";
import { setHistory } from "../../entities/history/model/slice";

export const HistoryList = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { historyList, removeItemHistory } = useHistory(user);

  useEffect(() => {
    const storage = getHistoryinLocal(user);
    if (storage) {
      console.log(JSON.parse(storage).history);
      dispatch(setHistory(JSON.parse(storage).history));
    }
  }, []);

  return (
    <div>
      <div>
        {historyList.map((item: string, index: number) => (
          <div key={item + index}>
            <span>{item}</span>
            <Button onClick={() => removeItemHistory(item)}>Удалить</Button>
          </div>
        ))}
      </div>
      <ClearButton />
    </div>
  );
};
