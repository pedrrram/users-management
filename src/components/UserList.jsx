import { useState } from "react";
import { Alert, Box, Grid } from "@mui/material";
import { useGetUsersQuery } from "../store/slices/usersAPI.slice";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import UserListLoading from "./UserListLoading";

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: users, isLoading, isError } = useGetUsersQuery();

  const filteredUsers = users?.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isError) {
    return (
      <Alert severity="error">
        Error loading users. Please try again later.
      </Alert>
    );
  }

  return (
    <Box>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {isLoading ? (
        <UserListLoading />
      ) : filteredUsers?.length === 0 ? (
        <Alert severity="info" color="secondary">
          No users found matching your search term!
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {filteredUsers?.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserList;
