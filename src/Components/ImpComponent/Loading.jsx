import { Box, Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
        <Typography variant="h3">Loading</Typography>
    </Box>
  );
};

export default Loading;
