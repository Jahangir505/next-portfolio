import React from "react";
import { ServiceCard } from "../components/service-card/ServiceCard";
import CodeIcon from "@mui/icons-material/Code";
import { Box, Grid, Typography } from "@mui/material";
import PhpIcon from "@mui/icons-material/Php";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export const Service = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography sx={{ fontSize: 30 }}>My Service</Typography>
      <Typography sx={{ width: "60%", margin: "0 auto" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </Typography>
      <Grid container spacing={2} mt={5}>
        <ServiceCard
          title="WordPress Development"
          subTitle={"Blog, E-commerce"}
          icon={<LaptopChromebookIcon />}
          col={4}
        />
        <ServiceCard
          title="Plugin Development"
          subTitle={"Blog, E-commerce"}
          icon={<LaptopChromebookIcon />}
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
          icon={<LaptopChromebookIcon />}
          col={4}
        />
        <ServiceCard
          title="Web Development"
          subTitle={"Blog, E-commerce"}
          icon={<PhpIcon />}
          col={4}
        />
        <Grid item md={4}>
          <Box
            sx={{
              background: "#ffffff",
              minHeight: 225,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              "& svg": { color: "#002f63", width: 60, height: 60 },
            }}
          >
            <Typography
              sx={{
                color: "#2B2B2B",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "22px",
              }}
            >
              Advertising
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: "#767676",
                lineHeight: "24px",
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.
            </Typography>
            <Typography
              sx={{
                background: "#002f63",
                padding: "3px 5px",
                fontSize: 14,
                margin: "5px 0",
              }}
            >
              Order Now
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
