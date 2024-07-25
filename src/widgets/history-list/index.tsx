import { useContext, useEffect } from "react";
import {
  useHistory,
  getHistoryinLocal,
  setHistory,
} from "../../entities/history";
import { AuthContext } from "../../shared/context";
import { ClearButton } from "../../features/clear-history";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const HistoryList = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { historyList, removeItemHistory, setCurrentSearchValue } =
    useHistory(user);

  useEffect(() => {
    const storage = getHistoryinLocal(user);
    if (storage) {
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
            <Link
              to={`/search?search=${item}`}
              onClick={() => setCurrentSearchValue(item)}
            >
              <Button size="small">Подробнее</Button>
            </Link>
          </div>
        ))}
      </div>
      <ClearButton />
    </div>
  );
};
