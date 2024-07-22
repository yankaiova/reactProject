import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export const SearchForm = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");
  const { isAuth, user } = useContext(AuthContext);
  const { addHistory } = useHistory(user);

  const onSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!query.trim()) {
      return navigate("/");
    }
    if (isAuth) {
      addHistory(query);
    }
    navigate(`/search?search=${query}`);
  };

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "enter") {
      onSubmit(e);
    }
  }

  return (
    <form style={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="search"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        onKeyDown={handleKeyPress}
        variant="outlined"
        size="small"
      />
      <Button type="submit" onClick={(e) => onSubmit(e)}>
        Найти
      </Button>
    </form>
  );
};
