import React from "react";
import { ServiceCard } from "../components/service-card/ServiceCard";
import CodeIcon from "@mui/icons-material/Code";
import { Box, Grid, Typography } from "@mui/material";

export const Service = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "70px" }}>
      <Typography sx={{ fontSize: 30 }}>My Service</Typography>
      <Typography sx={{ width: "60%", margin: "0 auto" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Typography>
      <Grid container spacing={2} mt={5}>
        <ServiceCard
          title="WordPress Development"
          subTitle={"Blog, E-commerce"}
          icon={<CodeIcon />}
          col={4}
        />
        <ServiceCard
          title="Plugin Development"
          subTitle={"Blog, E-commerce"}
          icon={<CodeIcon />}
          col={4}
        />
        <ServiceCard
          title="Front-End Development"
          subTitle={"Blog, E-commerce"}
          icon={<CodeIcon />}
          col={4}
        />
        <ServiceCard
          title="Back-End Development"
          subTitle={"Blog, E-commerce"}
          icon={<CodeIcon />}
          col={4}
        />
        <ServiceCard
          title="Web Development"
          subTitle={"Blog, E-commerce"}
          icon={<CodeIcon />}
          col={4}
        />
      </Grid>
    </Box>
  );
};
