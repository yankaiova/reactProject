import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { Button } from "@mui/material";

export const ClearButton = () => {
  const { user } = useContext(AuthContext);
  const { clearHistoryList } = useHistory(user);

  return (
    <Button onClick={() => clearHistoryList()}>Очистить историю поиска</Button>
  );
};
