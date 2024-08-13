import { Box, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as Yup from "yup";
import { login } from "../../Redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormComponent = () => {
  const dispatch = useDispatch();

  const [initialValue, setInitialValue] = useState({
    email: "",
    password: "",
  });

  console.log(initialValue);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      dispatch(login(values));
      setSubmitting(false);
    }, 1000);
  };

  const handleSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      // console.log(decoded);
      const userData = {
        // name: decoded.name,
        email: decoded.email,
        password: "123456", // Use a default password or generate one
      };
      await dispatch(login(userData)).unwrap();
      toast.success("Registered successfully with Google!");
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google login failed");
    }
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              width: "90%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "2rem",
              flexDirection: "column",
            }}
          >
            <Field
              type="email"
              name="email"
              placeholder="Email Address"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="email" component="Box" />
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="password" component="Box" />
            <Box className="googleSection">
              <Box className="mainGoogleSec mb-3">
                <Box className="googleBtn">
                  <GoogleLogin
                    type="submit"
                    onSuccess={handleSuccess}
                    onError={handleError}
                    shape="pill"
                    type="icon"
                    size="large"
                  />
                </Box>
                <Box className="googleBtn">
                  <FacebookIcon fontSize={"large"} />
                </Box>
                <Box className="googleBtn">
                  <GitHubIcon fontSize={"large"} />
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  paddingBlock: "1rem",
                  rounded: "0",
                  backgroundColor: "#031D36",
                  fontSize: "1.2rem",
                  marginTop: "1rem",
                 
                    "&:hover": {
                      backgroundColor: "#67a4dd",
                      fontWeight: "bold",
                      color:"black"
                    }
                }}
              >
                Create Account
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
