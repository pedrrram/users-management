import { Box, Typography } from "@mui/material";
import FavoritesList from "../components/FavoritesList";

const FavoritesPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Favorite Users
      </Typography>
      <Typography variant="body1" paragraph>
        Manage your list of favorite users.
      </Typography>
      <FavoritesList />
    </Box>
  );
};

export default FavoritesPage;
