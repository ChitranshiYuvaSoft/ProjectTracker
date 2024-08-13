import { Box, Typography } from "@mui/material";
import React from "react";

const Banner3 = () => {
  return (
    <Box className="bannerSec">
      <Box className="bannerLeft">
        <Box className="banner">
          <Typography
            variant="h2"
            textAlign={"center"}
            // align="start"
            fontWeight={"bold"}
            sx={{ marginBottom: "2rem" }}
          >
            Project Management
          </Typography>
          <Typography variant="h5" align="start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            maiores consequuntur, in rem quisquam dolore reiciendis enim!
            Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae
            dolore natus?
          </Typography>
          <Typography variant="h5" align="start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            optio deserunt expedita, harum saepe magnam commodi id adipisci a
            sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quod maiores consequuntur, in rem quisquam dolore reiciendis enim!
            Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae
            dolore natus?
          </Typography>
          <Typography variant="h5" align="start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            reprehenderit sapiente? Quam, velit quas ea dolorum possimus
            assumenda itaque quod, animi a ex sed minima! Eligendi ipsa nam a
            blanditiis commodi vero exercitationem quam repellendus, temporibus
            cum! Rerum, cumque quidem. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quod maiores consequuntur, in rem quisquam dolore
            reiciendis enim! Praesentium non veniam ea odit, cum illum nobis.
            Eligendi eius vitae dolore natus?
          </Typography>
        </Box>
      </Box>
      <Box className="bannerRight">
        <Box className="banner">
          <img
            src="https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723507200&semt=ais_hybrid"
            alt="noImg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner3;
