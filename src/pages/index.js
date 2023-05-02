import { Box, Grid, Typography } from "@mui/material";
import { Layouts } from "../containers/layouts";
import { Banner } from "../components/banner/banner";
import { Service } from "../containers/service";
import { UserInfo } from "../components/user-info/user-info";

function Home() {
  return (
    <Box>
      <Banner />
      <Service />
      
    </Box>
  );
}

export default Layouts(Home);
