import { Box } from "@mui/material";
import React from "react";
import { comapanyLogo } from "../Data/data";

const MarqueeData = () => {
  return (
    <marquee>
      <Box className="marqueeSec">
        {comapanyLogo.map((item, index) => (
          <Box className="marqueeContent" key={index}>
            <img src={item} width={"50%"} height={"100%"} alt="noImg" />
          </Box>
        ))}
      </Box>
    </marquee>
  );
};

export default MarqueeData;
