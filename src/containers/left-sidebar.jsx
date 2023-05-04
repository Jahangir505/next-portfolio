import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Profile } from "../components/profile/profile";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { UserInfo } from "../components/user-info/user-info";
import { Progress } from "../components/progress/progress";
import { profile_data } from "../components/dummy-data/data";

const social_list = [
  { name: "Facebook", icon: <FacebookIcon />, link: "#" },
  { name: "Instagram", icon: <InstagramIcon />, link: "#" },
  { name: "Twitter", icon: <TwitterIcon />, link: "#" },
  { name: "Linkedin", icon: <LinkedInIcon />, link: "#" },
  { name: "Youtube", icon: <YouTubeIcon />, link: "#" },
];

export const LeftSideBar = () => {
  const data = profile_data;
  return (
    <Box sx={{ background: "#ffffff", padding: "30px 20px" }}>
      <Profile
        designation={"Software Engineer"}
        isActive={true}
        name={"Jahangir Hossain"}
        social={social_list}
      />
      <Divider sx={{ margin: "15px 0" }} />
      <UserInfo />
      <Divider sx={{ margin: "15px 0" }} />
      <Box>
        <Typography sx={{ fontWeight: 500, fontSize: 18, color: "#2B2B2B" }}>
          Language
        </Typography>
        {data?.languages?.length > 0 &&
          data?.languages?.map((item, index) => (
            <Progress key={index} name={item?.name} value={item?.value} />
          ))}
      </Box>
      <Divider sx={{ margin: "15px 0" }} />
      <Box>
        <Typography sx={{ fontWeight: 500, fontSize: 18, color: "#2B2B2B" }}>
          Skils
        </Typography>
        {data?.skills?.length > 0 &&
          data?.skills?.map((item, index) => (
            <Progress key={index} name={item?.name} value={item?.value} />
          ))}
      </Box>
    </Box>
  );
};
