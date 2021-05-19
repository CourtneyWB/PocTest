import React from "react";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import listData from "../data.json";
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa';
import ReactDOM from 'react-dom'
import "../App.css";

// export const List = () => {
//     return (
//       <>

//      {/* <HomePageHeader />
  //       <div className="Lists-container">
       
  // //         { */
  //           return (
  //             <div key={key}>
  //               <Lists
               
  //                 key={key}
  //                 firstName={data.firstName}
  //                 lastName={data.lastName}
  //                 favouriteColor ={data.favouriteColor}
  //                 // style={{ color: data.favouriteColor }}
  //                 number={data.number}
  //                 status={data.status}
  //                 typeName={data.typeName}
  //               />
  //             </div>
  //           );
         
  //       </div>
  //     </>
  //   );
  // };
 
const HomePageHeader = () => {
    return (
      <header className="header">
       
      </header>
    );
  };

  const Lists = ({  }) => {
    // if (!firstName) return <div />;
    return (
<div>
      <HomePageHeader />
      <div className="Lists-container">
         
<Container>
<Table  striped bordered hover size="sm=4">
  <thead>
    <tr md={2}>
      <th>Full Name</th>
      <th>Favorite Color</th>
      <th>Phone Number</th>
      <th style ={{textAlign:'center'}}>Active</th>
    </tr>
  </thead>
  <tbody>
  {listData.map((data, key) => (

    <tr md={2}>
      <td style ={{align:'center'}} > {data.firstName} {data.lastName} </td>
      <td style={{color:data.favouriteColor}}>{data.favouriteColor}</td>
      <td>{data.number}</td>
      <td style ={{textAlign:'center'}}>{data.status==="active"?( <FaCheckCircle/> ):(< FaTimesCircle/> )}</td>
    </tr>

    ))}

  </tbody>
</Table>
</Container>
</div>
</div>
    );
  };

export default Lists;