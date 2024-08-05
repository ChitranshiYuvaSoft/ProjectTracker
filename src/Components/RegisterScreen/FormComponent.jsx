import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});

const FormComponent = () => {
  const [initialValue, setInitialValue] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
      >
        {({isSubmitting}) => (
          <Form style={{width:"90%", height:"100%", display:"flex", alignItems:"center", justifyContent:"space-around", padding:"2rem", flexDirection:"column"}}>
           <Field type="text" name="name" placeholder="Your Full Name" className="form-control py-3 fs-5 rounded-0"/>
           <ErrorMessage name="name" component="Box"/>
           <Field type="text" name="userName" placeholder="Username" className="form-control py-3 fs-5 rounded-0"/>
           <ErrorMessage name="userName" component="Box"/>
           <Field type="email" name="email" placeholder="Email Address" className="form-control py-3 fs-5 rounded-0"/>
           <ErrorMessage name="email" component="Box"/>
           <Field type="password" name="password" placeholder="Enter Password" className="form-control py-3 fs-5 rounded-0"/>
           <ErrorMessage name="password" component="Box"/>
           <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control py-3 fs-5 rounded-0"/>
           <ErrorMessage name="confirmPassword" component="Box"/>
           </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
