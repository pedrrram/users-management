import { Box } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      p={5}
    >
      <img
        src="./src/assets/404.svg"
        style={{
          maxHeight: 600,
          maxWidth: 600,
        }}
      />
    </Box>
  );
};

export default NotFound;
