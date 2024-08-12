import { Box } from "@mui/material";
import React from "react";


const ratingUser = [
    {
      profile:
        "https://zaidanconsulting.com/wp-content/uploads/2024/03/Testimonial-Slider-6.jpg",
    },
    {
      profile:
        "https://zaidanconsulting.com/wp-content/uploads/2024/03/Testimonial-Slider-3.jpg",
    },
    {
      profile:
        "https://zaidanconsulting.com/wp-content/uploads/2023/08/lokesh_yellamraju_acp.jpg",
    },
    {
      profile : "https://zaidanconsulting.com/wp-content/uploads/2023/08/ankita_joshi_acp.jpg"
    }
  ];
  
const RatingUser = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "30rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {ratingUser.map((item) => (
        <Box
          sx={{
            width: "25%",
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // padding :"3rem"
          }}
        >
          <img
            src={item.profile}
            alt="noProfile"
            width={"90%"}
            height={"90%"}
          />
        </Box>
      ))}
    </Box>
  );
};

export default RatingUser;
