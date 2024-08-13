import { Box } from "@mui/material";
import React from "react";
import { ratingUser } from "../../Data/data";

const RatingUser = () => {
  return (
    <Box className="ratingSection">
      {ratingUser.map((item, index) => (
        <Box className="ratingSec" key={index}>
          <img src={item} alt="noProfile" width={"90%"} height={"90%"} />
        </Box>
      ))}
    </Box>
  );
};

export default RatingUser;
