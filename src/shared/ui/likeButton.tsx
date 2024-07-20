import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

type Props = {
  isLike: boolean;
  likeClick: () => void;
  removeLikeClick: () => void;
};

export const LikeButton = ({ isLike, likeClick, removeLikeClick }: Props) => {
  function handleClick() {
    if (isLike) {
      removeLikeClick();
    } else {
      likeClick();
    }
  }

  return (
    <Box onClick={handleClick} style={{ cursor: "pointer" }}>
      {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Box>
  );
};

LikeButton.propTypes = {
  isLike: PropTypes.bool,
  likeClick: PropTypes.func,
  removeLikeClick: PropTypes.func,
};
