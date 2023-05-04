import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Progress = ({ value, name }) => {
  return (
    <Box sx={{ margin: "10px 0" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "#767676", fontSize: 14 }}>{name}</Typography>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            value
          )}%`}</Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            "& .css-5xe99f-MuiLinearProgress-bar1": {
              backgroundColor: "#002f63",
            },
          }}
          value={value}
        />
      </Box>
    </Box>
  );
};
