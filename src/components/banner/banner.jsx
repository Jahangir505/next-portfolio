import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BannerBg from "../../assets/img/banner-bg.png";
import profileImg from "../../assets/img/profile.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useBannerStyle } from "../../assets/stylesheet/banner/bannerStylesheet";

export const Banner = () => {
  const classes = useBannerStyle();
  return (
    <Box
      className={classes.root}
      sx={{
        background: `url(${BannerBg.src})`,
      }}
    >
      <Box className="left-side">
        <Typography component="h2">
          I am Jahangir Hossain <br />
          <span style={{ color: "#002f63", fontWeight: 900 }}>
            Full-Stack
          </span>{" "}
          Developer
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </Typography>
        <Button variant="contained" endIcon={<ArrowForwardIcon />}>
          Hire Me
        </Button>
      </Box>
      <Box className="right-side">
        <Image src={profileImg} alt="Profile" />
      </Box>
    </Box>
  );
};
