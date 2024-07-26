import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../shared/context";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { TextField } from "@mui/material";
import { Suggestions } from "../../../features/suggestions";
import { useDebounce } from "../../../shared/lib/useDebounce";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useContext(AuthContext);

  const { addHistory, setCurrentSearchValue, currentSearchValue } =
    useHistory(user);
  const debounceValue = useDebounce(currentSearchValue, 200);

  const [isOpenSuggestions, setIsOpenSuggestions] = useState<boolean>(false);

  const onSubmit = (search: string) => {
    setIsOpenSuggestions(false);
    if (!search.trim()) {
      return navigate("/");
    }
    if (isAuth) {
      addHistory(currentSearchValue);
    }
    navigate(`/search?search=${search}`);
  };

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onSubmit(currentSearchValue);
  }

  function handleKeyPress(e: React.KeyboardEvent, value: string) {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(value);
    }
  }

  const onFocus = () => setIsOpenSuggestions(true);

  const onBlur = () => setTimeout(() => setIsOpenSuggestions(false), 200);

  return (
    <div>
      <form style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <TextField
            id="search"
            type="text"
            value={currentSearchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentSearchValue(e.target.value)
            }
            onKeyDown={(e) => handleKeyPress(e, currentSearchValue)}
            onFocus={onFocus}
            onBlur={onBlur}
            variant="outlined"
            size="small"
            autoComplete="off"
          />
          <Suggestions isOpen={isOpenSuggestions} value={debounceValue} />
        </div>
        <SearchIcon
          type="submit"
          onClick={handleClick}
          color="primary"
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
};
