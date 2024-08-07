import { Box } from "@mui/material";
import React from "react";

const googleButton = () => {
  return (
    <Box
      sx={{
        width: "60%",
        height: "50%",
        display: "flex",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          width: "20%",
          height: "80%",
          display: "flex",
          padding: "2rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      >
        <GoogleIcon fontSize={"large"} />
      </Box>
      <Box
        sx={{
          width: "20%",
          height: "80%",
          display: "flex",
          padding: "2rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      >
        <FacebookIcon fontSize={"large"} />
      </Box>
      <Box
        sx={{
          width: "20%",
          height: "80%",
          display: "flex",
          padding: "2rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      >
        <GitHubIcon fontSize={"large"} />
      </Box>
    </Box>
  );
};

export default googleButton;
