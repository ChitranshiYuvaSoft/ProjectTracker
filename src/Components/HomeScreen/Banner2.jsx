import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner2 = () => {
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
            width: "80%",
            height: "80%",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src= "https://static.vecteezy.com/system/resources/previews/007/440/373/non_2x/project-manager-working-and-update-tasks-with-milestones-progress-planning-and-gantt-chart-scheduling-diagram-business-working-with-smart-phone-tablet-and-laptop-in-office-photo.jpg"
            alt="noImg"
            width={"100%"}
            height={"100%"}
          />
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
            How to create New Project?
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
    </Box>
  )
}

export default Banner2
