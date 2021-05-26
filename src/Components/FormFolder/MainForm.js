import React,{Component,useState} from "react";
import Modal from "react-modal";
import { Formik, Form, FormikProps,Field,ErrorMessage,Button,} from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "./TextField";

const MainForm = () => {

Modal.setAppElement("#root");
const [isOpen,setIsOpen] = useState(false)
function toggleModal(){setIsOpen(!isOpen)};

const validate = Yup.object({

    firstName: Yup.string()
      .max(10, "Must be 15 characters or less")
      .required("firstName is a required field"),

    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("lastName is a required field"),

    email: Yup.string()
    .email("Email is invalid")
    .required("email is a required field"),

    favouriteColor: Yup.string()
    .required("favoriteColor is a required field")
  });
  return (
    <Formik
      initialValues={{firstName: "",
      lastName: "",
      email: "",
      favouriteColor: ""}}   validationSchema ={validate}>
        {({values,errors})=>(
        
        <div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            {!errors.firstName && (<div style={{color:"green",fontSize:"10px"}}>Looks Good!</div>)}
            <TextField label="Last Name" name="lastName" type="text" />
            {!errors.lastName && (<div style={{color:"green",fontSize:"10px"}}>Looks Good!</div>)}
            <TextField label="Email" name="email" type="email" />
            {!errors.email && (<div style={{color:"green",fontSize:"10px"}}>Looks Good!</div>)}
            <br></br>

            <Field style=
            {{width:"81em",
            height:"2.3em",
            borderColor:"lightGrey",
            borderRadius: "6px"}} 
            as="select" label= "favouriteColor" name="favouriteColor">
      
            <option value="choose">Choose...</option>
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
           {!errors.select && (<div style={{color:"green",fontSize:"10px"}}>Looks Good!</div>)}

<div className="App">
      <button style = {{background: '#0096FF',
  border: '#67C8FF',borderRadius:'4px',color:'white',margin:'1.2rem',
  padding: '5px 10px',}}onClick={toggleModal}>Submit form</button><br></br>

      {/* <div><Modal style ={{overlay:{position:'absolute',top:'1em',bottom:'35em',left:'36em',right:'52em'
      }}} */}
      <div>
        
        <Modal style ={{overlay:{position:'fixed',
      top:'1em',
      bottom:'-1em',
      left:'-2em',
      right:'5em',
      margin: '15% auto',
      padding: '1px',
      width: '32%', 
      height:'45%'
    }}}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My  Modal"
      > 
        <div><button style={{position:'absolute',
  background: 'white',
  border: '#67C8FF',
  color:'grey',
  margin:'1.4rem',
  padding: '1px 1px',
  right:'-1em',
 }}onClick={toggleModal}>x </button></div>

  <h2 style={{fontSize:"24px"}}>Welcome   {values.firstName}   {values.lastName}         
</h2>


<hr style= {{width: "100%", color: "black", height: "1px" }}></hr>
        <div><p>Typically this would go to a server but here is good enough</p>
<p>Fancy colored email address below</p></div>

<div style=
{{ color: 
values.favouriteColor === 'blue'
 ? '#0000FF' : 
 values.favouriteColor === 'green'
 ? '#00FF00' 
 : '#FF0000' 
 }}>
   {values.email}
 </div>

<div className="App"><hr/>
        <button style={{position:'absolute',
  background: '#0096FF',
  border: '#67C8FF',
  color:'white',
  margin:'5%',
  padding: '6px 16px',
  right:'-1em',
  display: 'inline',borderRadius:'4px'}}onClick={toggleModal}>Close </button></div>
<div></div>
      </Modal>
      </div>
    </div>
          </Form>
        </div>)}
    </Formik>
  );
}
export default MainForm;