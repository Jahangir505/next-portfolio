import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const ServiceCard = ({ col, icon, title, subTitle }) => {
  return (
    <Grid item md={col}>
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
        {icon}
        <Typography
          sx={{
            color: "#2B2B2B",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "22px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 15,
            color: "#767676",
            lineHeight: "24px",
            fontWeight: 400,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Grid>
  );
};
