import React,{Component,useState} from "react";
import Modal from "react-modal";
import { Formik, Form, FormikProps,Field,ErrorMessage,Button} from "formik";
import * as Yup from "yup";
// import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import "bootstrap/dist/css/bootstrap.min.css";
import { TextField } from "./TextField";


const MainForm = () => {

// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

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
            {/* <button style={{background:"blue",border:"blue",
            paddingRight: "15px"}} 
            className ="btn btn-dark mt-3" 
            fontWeight = "200%"
            Position = "center"
            type="submit">Submit form
            </button> */}           
    {/* <>
      <button variant="primary" style={{background:"blue",border:"blue",
            paddingRight: "15px"}} 
            className ="btn btn-dark mt-3" 
            fontWeight = "200%"
            Position = "center"
            type="submit">Submit form 
      </button>
      */}
        
      {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Typically this would go to a server but here is good enough

Fancy colored email address below</Modal.Body>
        <Modal.Footer>
          <button2 variant="primary" onClick={handleClose}>
         Close
          </button2>
        </Modal.Footer>
      </Modal>
    </> */}

<div className="App">
      <button style = {{background: '#0096FF',
  border: '#67C8FF',color:'white',margin:'1.2rem',
  padding: '5px 15px',}}onClick={toggleModal}>Submit form</button><br></br>

      {/* <div><Modal style ={{overlay:{position:'absolute',top:'1em',bottom:'35em',left:'36em',right:'52em'
      }}} */}
      <div><Modal style ={{overlay:{position:'fixed',
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
      ><h2>Welcome</h2><hr/>
        <div><h8>Typically this would go to a server but here is good enough</h8>
<h8>Fancy colored email address below</h8></div>


<div className="App"><hr/>
        <button style={{position:'absolute',
  background: '#0096FF',
  border: '#67C8FF',
  color:'white',
  margin:'1.9rem',
  padding: '6px 15px',
  right:'-1em',
  display: 'inline'}}onClick={toggleModal}>Close </button></div>
<hr></hr><div></div>
      </Modal>
      </div>
    </div>
          </Form>
        </div>
        
      {/* )} */}
    </Formik>
  );
}
export default MainForm;