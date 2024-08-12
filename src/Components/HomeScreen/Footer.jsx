import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import ListFooter from "./ListFooter";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "20rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListFooter />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "7rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          &copy; Project Tracker{" "}
        </Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          chitranshiyuvasoft448@gmail.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
