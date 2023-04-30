import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Profile } from "../components/profile/profile";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const social_list = [
  { name: "Facebook", icon: <FacebookIcon />, link: "#" },
  { name: "Instagram", icon: <InstagramIcon />, link: "#" },
  { name: "Twitter", icon: <TwitterIcon />, link: "#" },
  { name: "Linkedin", icon: <LinkedInIcon />, link: "#" },
  { name: "Youtube", icon: <YouTubeIcon />, link: "#" },
];

export const LeftSideBar = () => {
  return (
    <Box sx={{ background: "#ffffff", padding: "30px 20px" }}>
      <Profile
        designation={"Software Engineer"}
        isActive={true}
        name={"Jahangir Hossain"}
        social={social_list}
      />
      <Divider sx={{ margin: "15px 0" }} />
    </Box>
  );
};
