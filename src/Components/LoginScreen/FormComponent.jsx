import { Box, Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as Yup from "yup";
import { login } from "../../Redux/auth/authSlice";
import { useDispatch } from "react-redux";

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

  console.log(initialValue)

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      dispatch(login(values));
      setSubmitting(false);
    }, 1000);
  
  };

  return (
    <>
      <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="email" component="Box" />
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control py-3 fs-5 rounded-0"
            />
            <ErrorMessage name="password" component="Box" />
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
