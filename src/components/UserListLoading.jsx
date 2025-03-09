import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Skeleton,
} from "@mui/material";

const UserListLoading = () => {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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
                <Skeleton
                  variant="circular"
                  width={60}
                  height={60}
                  sx={{ mr: 2 }}
                />
                <Box>
                  <Skeleton variant="text" width={120} height={24} />
                </Box>
              </Box>
              <Skeleton variant="text" width={180} height={20} sx={{ mb: 1 }} />
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: "flex-end" }}>
              <IconButton>
                <Skeleton variant="circular" width={24} height={24} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserListLoading;
