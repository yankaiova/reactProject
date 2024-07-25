import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { Button, TextField } from "@mui/material";

export const SearchForm = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useContext(AuthContext);
  const { addHistory, setCurrentSearchValue, currentSearchValue } =
    useHistory(user);

  const onSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (!currentSearchValue.trim()) {
      return navigate("/");
    }
    if (isAuth) {
      addHistory(currentSearchValue);
    }
    navigate(`/search?search=${currentSearchValue}`);
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
        value={currentSearchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCurrentSearchValue(e.target.value)
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
