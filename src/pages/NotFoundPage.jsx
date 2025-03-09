import { Box } from "@mui/material";
import notFoundImage from "../assets/404.svg";

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
        src={notFoundImage}
        style={{
          maxHeight: 600,
          maxWidth: 600,
        }}
        alt="Not Found"
      />
    </Box>
  );
};

export default NotFound;
