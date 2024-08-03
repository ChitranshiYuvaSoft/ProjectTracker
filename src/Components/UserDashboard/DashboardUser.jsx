import { Box } from "@mui/material";
import React from "react";

// height: {
//   xs: 600,
//   sm: 665,
//   md: 600,
//   lg: 730,
//   xl: 670,
// },

const DashboardUser = () => {
  return (
    <Box
      sx={{
        width: "98%",
        height: "98%",
        borderRadius: "7rem",
        display: "flex",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column"
        },
        alignItems: "center",
        justifyContent: "center",
        }}
    >
      <Box
        sx={{
          width:{
            xl: "40%",
            lg: "40%",
            md: "40%",
            sm: "97%",
            xs: "97%"
          },
          height: {
            xl: "90%",
            lg: "90%",
            md: "90%",
            sm: "45%",
            xs: "45%"
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: {
            xl: "column",
            lg: "column",
            md: "column",
            sm: "row",
            xs: "row"
          },
        }}
      >
        <Box
          sx={{
            width:  {
              xl: "85%",
              lg: "85%",
              md: "85%",
              sm: "49%",
              xs: "49%"
            },
            marginTop:{
              xs:"1rem"
            },
            height: {
              xl: "40%",
              lg: "40%",
              md: "40%",
              sm: "95%",
              xs: "95%"
            },
            border:"2px solid #031D36",
            borderRadius:"2rem",
            backgroundColor: "white",
          }}
        ></Box>
        <Box
          sx={{
            width:  {
              xl: "85%",
              lg: "85%",
              md: "85%",
              sm: "49%",
              xs: "49%"
            },
            marginTop:{
              xs:"1rem"
            },
            height: {
              xl: "57%",
              lg: "57%",
              md: "57%",
              sm: "95%",
              xs: "95%"
            },
            border:"2px solid #031D36",
            borderRadius:"2rem",
            backgroundColor: "white",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width:  {
            xl: "55%",
            lg: "55%",
            md: "55%",
            sm: "97%",
            xs: "97%"
          },
          marginTop:{
            xs:"1rem"
          },
          height: "90%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
          border:"2px solid #031D36",
          borderRadius: "2rem"
        }}
      ></Box>
    </Box>
  );
};

export default DashboardUser;
