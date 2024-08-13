import { Box, Typography } from "@mui/material";
import React from "react";

const Banner1 = () => {
  return (
    <Box className="bannerSec">
      <Box className="bannerLeft">
        <Box className="banner">
          <Typography
            variant="h2"
            textAlign={"start"}
            fontWeight={"bold"}
            sx={{ marginBottom: "2rem" }}
          >
            Welcome To Project Tracker
          </Typography>
          <Typography variant="h5" textAlign={"start"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            maiores consequuntur, in rem quisquam dolore reiciendis enim!
            Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae
            dolore natus?
          </Typography>
          <Typography variant="h5" textAlign={"start"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            optio deserunt expedita, harum saepe magnam commodi id adipisci a
            sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quod maiores consequuntur, in rem quisquam dolore reiciendis enim!
            Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae
            dolore natus?
          </Typography>
          <Typography variant="h5" textAlign={"start"}>
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
            src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
            alt="noImg"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner1;
