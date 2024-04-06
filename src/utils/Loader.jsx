import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <ClipLoader color="#000000" />
    </Box>
  );
};

export default Loader;
