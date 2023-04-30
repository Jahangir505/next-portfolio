import { Box, styled, Badge, Avatar, Typography } from "@mui/material";
import React from "react";
import proImg from "../../assets/img/Jahangir.jpg";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const Profile = ({ name, img, isActive, designation, social }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt={name} src={proImg.src} sx={{ width: 150, height: 150 }} />
      </StyledBadge>
      <Typography
        sx={{
          color: "#2B2B2B",
          fontWeight: 500,
          fontSize: 18,
          marginTop: "30px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#767676",
          fontWeight: 400,
          fontSize: 15,
          lineHeight: "24px",
        }}
      >
        {designation}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "& svg": {
            color: "#000",
            background: "cyan",
            padding: "5px",
            borderRadius: "50%",
          },
        }}
      >
        {social?.length > 0 &&
          social?.map((item, index) => (
            <Link href={item?.link} key={index}>
              {item?.icon}
            </Link>
          ))}
      </Box>
    </Box>
  );
};
