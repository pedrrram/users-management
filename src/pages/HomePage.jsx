import { Box, Typography } from "@mui/material";
import UserList from "../components/UserList";

const HomePage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Users List
      </Typography>
      <Typography variant="body1" paragraph>
        Browse users and add them to your favorites.
      </Typography>
      <UserList />
    </Box>
  );
};

export default HomePage;
