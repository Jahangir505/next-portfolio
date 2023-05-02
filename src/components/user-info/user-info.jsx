import { Box, Typography } from "@mui/material";
import React from "react";

export const UserInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          sx={{
            background: "#002f63",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Age
        </Typography>
        <Typography
          sx={{
            background: "#002f63",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Residence
        </Typography>
        <Typography
          sx={{
            background: "#002f63",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Freelance
        </Typography>
        <Typography
          sx={{
            background: "#002f63",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Address
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          sx={{
            color: "#2B2B2B",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          26
        </Typography>
        <Typography
          sx={{
            color: "#2B2B2B",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          BD
        </Typography>
        <Typography
          sx={{
            color: "#7EB942",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Available
        </Typography>
        <Typography
          sx={{
            color: "#2B2B2B",
            padding: "3px 5px",
            fontSize: 14,
            margin: "5px 0",
          }}
        >
          Dhaka,Bangladesh
        </Typography>
      </Box>
    </Box>
  );
};
