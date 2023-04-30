import { Box, Typography } from "@mui/material";
import { Layouts } from "../containers/layouts";
import { Banner } from "../components/banner/banner";

function Home() {
  return (
    <Box>
      <Banner />
    </Box>
  );
}

export default Layouts(Home);
