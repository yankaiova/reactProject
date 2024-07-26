import { useContext, useEffect } from "react";
import {
  useHistory,
  getHistorybyEmail,
  setHistory,
} from "../../entities/history";
import { AuthContext } from "../../shared/context";
import { ClearButton } from "../../features/clear-history";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export const HistoryList = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { historyList, removeItemHistory, setCurrentSearchValue } =
    useHistory(user);

  useEffect(() => {
    const storage = getHistorybyEmail(user);
    if (storage) {
      dispatch(setHistory(JSON.parse(storage).history));
    }
  }, []);

  return (
    <div>
      <div>
        {historyList.map((item: string, index: number) => (
          <div
            key={item + index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button>
              {" "}
              <Link
                to={`/search?search=${item}`}
                onClick={() => setCurrentSearchValue(item)}
              >
                {item}
              </Link>
            </Button>

            <CloseIcon
              sx={{ cursor: "pointer" }}
              fontSize="small"
              color="primary"
              style={{ marginLeft: "10px" }}
              onClick={() => removeItemHistory(item)}
            />
          </div>
        ))}
      </div>
      <ClearButton />
    </div>
  );
};
