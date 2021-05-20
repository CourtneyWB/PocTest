import React,{Component,useState} from "react";
import Modal from "react-modal";
import { Formik, Form, FormikProps,Field,ErrorMessage } from "formik";
import * as Yup from "yup";
// import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
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
// class DropDownMenu extends Component {
//     render() {
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
            <TextField label="Email" name="email" type="email" /><br></br>
            <Field style={{width:"81em",height:"2.3em",borderColor:"lightGrey",borderRadius: "6px"}} as="select" label= "favouriteColor" name="favouriteColor">
      
            <option value="red">Choose...</option>
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
            {/* <Dropdown>
				<Dropdown.Toggle variant="white" id="dropdown-basic">
				Choose...
  </Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">red</Dropdown.Item>
					<Dropdown.Item href="#/action-2">blue</Dropdown.Item>
					<Dropdown.Item href="#/action-3">green</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
		{/* ) */}
<br></br>           
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
}

export default MainForm;