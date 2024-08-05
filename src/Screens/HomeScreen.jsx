import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {

  const {user} = useSelector(state => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
      navigate('/login');
    }
  }, [user])
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "90.1vh",
          backgroundColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography textAlign={"center"} variant="h3">
          WElCOME TO OUR APPlCATION
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Box
            sx={{
              width: "15%",
              height: "30%",
              border: ".1rem solid black",
              borderRadius: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">User Dashboard</Typography>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
