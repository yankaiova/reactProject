import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { productApi } from "../../../entities/product/api/slice";
import { Product } from "../../../shared/model/types";
import { Button } from "@mui/material";
import { useHistory } from "../../../entities/history/lib/useHistory";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context";

type Props = {
  isOpen: boolean;
  value: string;
};

export const Suggestions = ({ isOpen, value }: Props) => {
  const { user } = useContext(AuthContext);
  const { useGetProductByNameQuery } = productApi;
  const { data, isLoading } = useGetProductByNameQuery(value);
  const navigate = useNavigate();
  const { setCurrentSearchValue } = useHistory(user);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return;

  const redirectOnSearch = (query: string) => {
    setCurrentSearchValue(query);
    navigate(`/search?search=${query}`);
  };

  return (
    <>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {data.slice(0, 5).map((item: Product) => (
            <Button
              onClick={() => redirectOnSearch(item.title)}
              key={item.title}
            >
              {item.title}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

Suggestions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};
