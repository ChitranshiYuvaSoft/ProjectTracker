import { Box, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/auth/authSlice";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  // confirmPassword: Yup.string().required("Confirm Password is required"),
});

const FormComponent = () => {
  const dispatch = useDispatch();

  const [initialValue, setInitialValue] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      dispatch(register(values));
      setSubmitting(false);
    }, 1000);
  };

  const handleSuccess = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);
      const userData = {
        name: decoded.name,
        email: decoded.email,
        profile: decoded.picture,
        password: "123456", // Use a default password or generate one
      };
      await dispatch(register(userData)).unwrap();
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
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="name" component="div" />
            <Field
              type="text"
              name="userName"
              placeholder="Username"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="userName" component="div" />
            <Field
              type="email"
              name="email"
              placeholder="Email Address"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
              className="fieldStyle form-control"
            />
            <ErrorMessage name="password" component="div" />

            <Box className="googleSection">
              <Box className="googleSec">
                <Box className="mainGoogleSec">
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
                  <Box
                   className="googleBtn"
                  >
                    <FacebookIcon fontSize={"large"} />
                  </Box>
                  <Box
                    className="googleBtn"
                  >
                    <GitHubIcon fontSize={"large"} />
                  </Box>
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                className="submitBtn"
                sx={{
                  paddingBlock: "1rem",
                  rounded: "0",
                  backgroundColor: "#031D36",
                  fontSize: "1.2rem",
                  marginTop: "1rem",
                 
                    "&:hover": {
                      backgroundColor: "#67a4dd",
                      fontWeight: "bold",
                      color: "black"
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
