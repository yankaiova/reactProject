import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { productApi } from "../../../entities/product";
import { Product } from "../../../shared/model/types";
import { Button } from "@mui/material";

type Props = {
  isOpen: boolean;
  value: string;
};

export const Suggestions = ({ isOpen, value }: Props) => {
  const { useGetProductByNameQuery } = productApi;
  const { data, isLoading } = useGetProductByNameQuery(value);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return;

  const redirectOnSearch = (query: number) => {
    navigate(`/${query}`);
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
            <Button onClick={() => redirectOnSearch(item.id)} key={item.title}>
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
