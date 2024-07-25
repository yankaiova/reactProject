import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { Button, TextField } from "@mui/material";
import { Suggestions } from "../../../features/suggestions";
import { useDebounce } from "../../../shared/lib/useDebounce";

export const SearchForm = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useContext(AuthContext);

  const { addHistory, setCurrentSearchValue, currentSearchValue } =
    useHistory(user);
  const debounceValue = useDebounce(currentSearchValue, 200);

  const [isOpenSuggestions, setIsOpenSuggestions] = useState<boolean>(false);

  const onSubmit = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setIsOpenSuggestions(false);
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
      setIsOpenSuggestions(false);
      onSubmit(e);
    }
  }

  const onFocus = () => setIsOpenSuggestions(true);

  const onBlur = () => setTimeout(() => setIsOpenSuggestions(false), 200);

  return (
    <div>
      <form style={{ display: "flex", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="search"
            type="text"
            value={currentSearchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentSearchValue(e.target.value)
            }
            onKeyDown={handleKeyPress}
            onFocus={onFocus}
            onBlur={onBlur}
            variant="outlined"
            size="small"
            autoComplete="off"
          />
          <Suggestions isOpen={isOpenSuggestions} value={debounceValue} />
        </div>
        <Button type="submit" onClick={(e) => onSubmit(e)}>
          Найти
        </Button>
      </form>
    </div>
  );
};
