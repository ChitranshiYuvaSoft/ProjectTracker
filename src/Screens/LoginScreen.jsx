import { Box, Button, CircularProgress, Typography } from "@mui/material";

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import FormComponent from "../Components/LoginScreen/FormComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";
import Loading from "../Components/ImpComponent/Loading";

const LoginScreen = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user && isSuccess) {
      navigate("/userdashboard");
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
  }, [isSuccess, user]);

  return (
    <>
      <Navbar />
      <Box className="loginScreen">
        <Box className="authSec">
          <img src="./Image/registerBg.webp" alt="noImg" />
        </Box>
        <Box className="authFormSec">
          {isLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              <Box className="authForm">
                <Box className="authLogin">
                  <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{ textTransform: "uppercase" }}
                  >
                    Login
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
                <Box className="formComponentSec">
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

export default LoginScreen;
