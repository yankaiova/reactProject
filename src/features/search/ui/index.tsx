import { useNavigate } from "react-router-dom";
import { schema } from "../../../shared/config/schema";
import { InputForm } from "../../../shared/ui/inputForm";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";

export const SearchForm = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useContext(AuthContext);
  const { addHistory } = useHistory({ user });
  const onSubmit = (nameData: { query: string }) => {
    if (!nameData.query.trim()) {
      return navigate("/");
    }
    if (isAuth) {
      addHistory(nameData.query);
    }
    navigate(`/search?search=${nameData.query}`);
  };

  function handlePress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "enter") {
      console.log("click");
    }
  }

  return (
    <InputForm
      onSubmit={onSubmit}
      schema={schema}
      handleKeyPress={handlePress}
    />
  );
};
