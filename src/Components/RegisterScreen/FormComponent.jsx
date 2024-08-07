import { Box, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/auth/authSlice";
import { toast } from "react-toastify";

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
              // value={name}
              // onchange={handleChange}
              placeholder="Your Full Name"
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="name" component="div" />
            <Field
              type="text"
              name="userName"
              placeholder="Username"
              // value={userName}
              // onchange={handleChange}
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="userName" component="div" />
            <Field
              type="email"
              name="email"
              // value={email}
              // onchange={handleChange}
              placeholder="Email Address"
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              // value={password}
              // onchange={handleChange}
              placeholder="Enter Password"
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="password" component="div" />

            <Box
              sx={{
                width: "100%",
                height: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
             <Box
                    sx={{
                      width: "60%",
                      height: "50%",
                      display: "flex",
                      padding: "2rem",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        width: "20%",
                        height: "80%",
                        display: "flex",
                        padding: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    >
                      <GoogleIcon fontSize={"large"} />
                    </Box>
                    <Box
                      sx={{
                        width: "20%",
                        height: "80%",
                        display: "flex",
                        padding: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    >
                      <FacebookIcon fontSize={"large"} />
                    </Box>
                    <Box
                      sx={{
                        width: "20%",
                        height: "80%",
                        display: "flex",
                        padding: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    >
                      <GitHubIcon fontSize={"large"} />
                    </Box>
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
