import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectIsFavorite,
} from "../store/slices/favorites.slice";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, user.id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(user));
    } else {
      dispatch(addFavorite(user));
    }
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "secondary.light",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{
              width: 60,
              height: 60,
              mr: 2,
              color: "primary.contrastText",
              backgroundColor: "primary.main",
            }}
          />
          <Box>
            <Typography variant="h6" component="h2">
              {user.name}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Joined at: {new Date(user.createdAt).toDateString()}
        </Typography>
        {user.phone && (
          <Typography variant="body2" color="text.secondary">
            Phone: {user.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
        <IconButton
          aria-label="add to favorites"
          onClick={handleToggleFavorite}
          color={isFavorite ? "secondary" : "default"}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: "error.main" }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
