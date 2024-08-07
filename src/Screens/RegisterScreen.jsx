import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import FormComponent from "../Components/RegisterScreen/FormComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Zoom }from 'react-toastify'
import Loading from "../Components/ImpComponent/Loading";

const RegisterScreen = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/login");
    }
    if (isError && message) {
      toast.error(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }
  }, [isSuccess, user, isError, message]);
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100%", height: "90vh", display: "flex" }}>
        <Box
          sx={{
            width: "60%",
            height: "100%",
            backgroundColor: "teal",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./Image/registerBg.webp"
            alt="noImg"
            width={"100%"}
            height={"100%"}
            style={{ boxShadow: "inset 0rem 0rem 10rem #FFFFFF" }}
          />
        </Box>
        <Box
          sx={{
            width: "40%",
            height: "100%",
            backgroundColor: "#A4C7E7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "inset 0rem 0rem 10rem #FFFFFF",
          }}
        >
          {isLoading ? (
            <>
              <Loading/>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: "95%",
                  height: "80%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Register
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={"bold"}
                    sx={{
                      textTransform: "uppercase",
                      color: "#031D36",
                      marginTop: "1rem",
                    }}
                  >
                    It's Completely Free
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "85%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormComponent />
                </Box>
              
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default RegisterScreen;
