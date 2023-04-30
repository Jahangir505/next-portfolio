import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BannerBg from "../../assets/img/banner-bg.png";
import profileImg from "../../assets/img/profile.png";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Banner = () => {
  return (
    <Box
      sx={{
        background: `url(${BannerBg.src})`,
        padding: "0 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        flexDirection: "row",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <Typography component="h2" sx={{ fontSize: 38, color: "#2B2B2B" }}>
          I'm Jahangir Hossain <br />
          <span style={{ color: "cyan" }}>Full-Stack</span> Developer
        </Typography>
        <Typography
          sx={{
            color: "#767676",
            fontSize: 14,
            width: "80%",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </Typography>
        <Button
          sx={{
            background: "cyan !important",
            color: "#2B2B2B",
            marginTop: "25px",
          }}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Hire Me
        </Button>
      </Box>
      <Box sx={{ width: "30%" }}>
        <Image src={profileImg} alt="Profile" />
      </Box>
    </Box>
  );
};
