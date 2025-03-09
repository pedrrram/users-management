import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { selectFavorites } from "../store/slices/favorites.slice";
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleIcon from "@mui/icons-material/People";

const Header = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <AppBar position="sticky" variant="outlined" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<PeopleIcon />}
          >
            Users
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/favorites"
            startIcon={
              <Badge badgeContent={favorites.length} color="error">
                <FavoriteIcon />
              </Badge>
            }
          >
            Favorites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
