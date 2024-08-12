import { Box, Typography } from "@mui/material";
import React from "react";

// const Data = [
//   {
//     image:
//       "https://static.vecteezy.com/system/resources/previews/007/440/373/non_2x/project-manager-working-and-update-tasks-with-milestones-progress-planning-and-gantt-chart-scheduling-diagram-business-working-with-smart-phone-tablet-and-laptop-in-office-photo.jpg",
//     heading: "Welcome To Project Tracker",
//     content:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores consequuntur, in rem quisquam dolore reiciendis end Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae dolore natus,   Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Assumenda optio deserunt expedita, harum saepe magnam commodi id adipisci a sequi. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Quod maiores consequuntur, in rem quisquam dolore reiciendis enim! Praesentium non veniam ea odit, cum  illum nobis. Eligendi eiusvitae dolore natus?",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Impedit, reprehenderit sapiente? Quam, velit quas ea dolorum  possimus assumenda itaque quod, animi a ex sed minima! Eligendi ipsa nam a blanditiis commodi vero exercitationem quam repellendus, temporibus cum! Rerum, cumque quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae dolore natus?",
//   },
//   {
//     image:
//       "https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=",
//     heading: "How to create New Project?",
//     content:
//       " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores consequuntur, in rem quisquam dolore reiciendis end Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae dolore natus,   Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Assumenda optio deserunt expedita, harum saepe magnam commodi id adipisci a sequi. Lorem ipsum dolor sit amet, consecteturadipisicing elit. Quod maiores consequuntur, in rem quisquam dolore reiciendis enim! Praesentium non veniam ea odit, cum  illum nobis. Eligendi eiusvitae dolore natus?",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit.   Impedit, reprehenderit sapiente? Quam, velit quas ea dolorum  possimus assumenda itaque quod, animi a ex sed minima! Eligendi ipsa nam a blanditiis commodi vero exercitationem quam repellendus, temporibus cum! Rerum, cumque quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod maiores Praesentium non veniam ea odit, cum illum nobis. Eligendi eius vitae dolore natus?",
//   },
// ];

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "40rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <Box
          sx={{
            width: "90%",
            height: "80%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            align="start"
            fontWeight={"bold"}
            sx={{ marginBottom: "2rem" }}
          >
            Welcome To Project Tracker
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
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
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

export default Banner;
