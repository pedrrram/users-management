import { Alert, Box, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../store/slices/favorites.slice";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

const FavoritesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const favorites = useSelector(selectFavorites);

  const filteredFavorites = favorites?.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {favorites.length === 0 ? (
        <Alert severity="info" color="secondary">
          You haven't added any favorites yet.
        </Alert>
      ) : filteredFavorites.length === 0 ? (
        <Alert severity="info" color="secondary">
          No favorites found matching your search term!
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {filteredFavorites.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoritesList;
