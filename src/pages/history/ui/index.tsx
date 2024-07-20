import { useContext } from "react";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { AuthContext } from "../../../shared/context";
import { ClearButton } from "../../../features/clear-history";

export const HistoryPage = () => {
  const { user } = useContext(AuthContext);
  const { historyList } = useHistory(user);

  return (
    <div>
      <div>
        {historyList.map((item: string) => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <ClearButton />
    </div>
  );
};
