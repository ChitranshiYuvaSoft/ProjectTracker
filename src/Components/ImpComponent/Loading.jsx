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
 {/* From Uiverse.io by mobinkakei */}
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </Box>
  );
};

export default Loading;
