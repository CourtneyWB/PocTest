import React from "react";
import Modal from "react-modal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "./TextField";

const MainForm = () => {

  const validate = Yup.object({

    firstName: Yup.string()
      .max(10, "Must be 15 characters or less")
      .required("Required"),

    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    email: Yup.string()
    .email("Email is invalid")
    .required("Required"),

  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        favouriteColor: "",
      }}
      validationSchema={validate}
    >
      {/* {(formik) => ( */}
        <div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="Email" type="email" />
            <TextField label="Favourite Color" name="favouriteColor" type="text" />
           
            <button style={{background:"blue",border:"blue",
            paddingRight: "15px"}} 
            className ="btn btn-dark mt-3" 
            fontWeight = "200%"
            Position = "center"
            type="submit">Submit form
            </button>
            
          </Form>
        </div>
      {/* )} */}
    </Formik>
  );
};

export default MainForm;