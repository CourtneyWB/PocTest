// import React,{Component,useState} from "react";
// import Modal from "react-modal";
// import { Formik, Form, FormikProps,Field,ErrorMessage,Button} from "formik";
// import * as Yup from "yup";
// // import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
// // import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { TextField } from "./TextField";
// import ReactDom from 'react-dom';

// const MainForm = () => {


// Modal.setAppElement("#root");
// const [isOpen,setIsOpen] = useState(false)
// function toggleModal(){setIsOpen(!isOpen)};

// const validate = Yup.object({

//     firstName: Yup.string()
//       .max(10, "Must be 15 characters or less")
//       .required("Required"),

//     lastName: Yup.string()
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),

//     email: Yup.string()
//     .email("Email is invalid")
//     .required("Required"),

//     favouriteColor: Yup.string()
    

//   });

//   return (

//     <Formik initialValues={"firstName","lastName","email","favouriteColor"} validationSchema={validate}>
//     {({values}) => (
//       // color: values.favouriteColor === 'blue' ? '#0000FF' : values.favouriteColor === 'green' ? '#00FF00' : '#FF0000' }}>{values.email} */}
      
//         <div>
//           <Form>
//             <TextField label="First Name" name="firstName" type="text" />
//             <TextField label="Last Name" name="lastName" type="text" />
//             <TextField label="Email" name="email" type="email" /><br></br>
//             <Field style={{width:"81em",
//             height:"2.3em",
//             borderColor:"lightGrey",
//             borderRadius: "6px"}} 
//             as="select" >
      
//             <option value="red">Choose...</option>
//              <option value="red">Red</option>
//              <option value="green">Green</option>
//              <option value="blue">Blue</option>
//            </Field>
      
     
// <br></br>           

// <div className="App">
//       <button style = {{background: '#0096FF',
//   border: '#67C8FF',color:'white',margin:'1.2rem',
//   padding: '5px 15px',}}onClick={toggleModal}>Submit form</button><br></br>

      

      
//       <div><Modal style ={{overlay:{position:'fixed',
//       top:'1em',
//       bottom:'-1em',
//       left:'-3em',
//       right:'5em',
//       margin: '15% auto',
//       padding: '1px',
//       width: '30%', 
//     }
//   }}
      
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My  Modal"
//       ><h2>Welcome</h2><hr/>
//         <div><h8>Typically this would go to a server but here is good enough</h8>
// <h8>Fancy colored email address below</h8></div><br></br>
// <h8>(email goes in here)</h8>
// <div style=
// {{ color: 
// values.favouriteColor === 'blue'
//  ? '#0000FF' : 
//  values.favouriteColor === 'green'
//  ? '#00FF00' 
//  : '#FF0000' 
//  }}>
//    {values.email}
//  </div>

// <div className="App"><hr/>
//         <button style=
//   {{position:'absolute',
//   background: '#0096FF',
//   border: '#67C8FF',
//   color:'white',
//   margin:'1.3rem',
//   padding: '4px 10px',
//   right:'-1em',
//   display: 'inline'}}onClick={toggleModal}>Close </button></div>
// <div></div>

//       </Modal>
//       </div>
//     </div>
//           </Form>
//         </div>
//     )}
//     {/* )} */}
//     </Formik>
    
//   );
// }
// export default MainForm;
import React,{Component,useState} from "react";
import Modal from "react-modal";
import { Formik, Form, FormikProps,Field,ErrorMessage,Button} from "formik";
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
      .required("Required"),

    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    email: Yup.string()
    .email("Email is invalid")
    .required("Required"),

    favouriteColor: Yup.string()

  });
  return (
    <Formik
      initialValues={{firstName: "",
      lastName: "",
      email: "",
      favouriteColor: ""}}   validationSchema ={validate}>
        {({values})=>(
       
        <div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" /><br></br>
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

<div className="App">
      <button style = {{background: '#0096FF',
  border: '#67C8FF',color:'white',margin:'1.2rem',
  padding: '5px 15px',}}onClick={toggleModal}>Submit form</button><br></br>

      {/* <div><Modal style ={{overlay:{position:'absolute',top:'1em',bottom:'35em',left:'36em',right:'52em'
      }}} */}
      <div>
        
        <Modal style ={{overlay:{position:'fixed',
      top:'1em',
      bottom:'-1em',
      left:'-3em',
      right:'5em',
      margin: '15% auto',
      padding: '1px',
      width: '30%', 
      
    }}}
      
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My  Modal"

        
><h2>Welcome   {values.firstName}   {values.lastName}</h2><hr></hr>
        <div><h8>Typically this would go to a server but here is good enough</h8><br></br>
<h8>Fancy colored email address below</h8></div>

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
  margin:'1.2rem',
  padding: '6px 13px',
  right:'-1em',
  display: 'inline'}}onClick={toggleModal}>Close </button></div>
<div></div>
      </Modal>
      </div>
    </div>
          </Form>
        </div>)}
        
      {/* )} */}
    </Formik>
  );
}
export default MainForm;
