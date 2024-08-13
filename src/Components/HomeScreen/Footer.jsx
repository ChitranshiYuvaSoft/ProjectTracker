import { Box, Typography } from "@mui/material";
import React from "react";
import ListFooter from "./ListFooter";

const Footer = () => {
  return (
    <>
      <Box className="footerSection">
        <Box className="footerSec">
          <ListFooter />
        </Box>
      </Box>

      <Box className="footerCopyWrite">
        <Typography variant="h6" fontWeight={"bold"} color={"white"}>
          &copy; Project Tracker{" "}
        </Typography>
        <Typography variant="h6" fontWeight={"bold"} color={"white"}>
          chitranshiyuvasoft448@gmail.com
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
