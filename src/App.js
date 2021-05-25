import React from "react";
import './App.css';
import List from './Components/ListFolder/List';
import MainHeader from './Components/MainHeaderFolder/MainHeader';
import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';
import MainForm from './Components/FormFolder/MainForm';

function App() {
  return (
    <Router>

    <div className="container mt-1">
      <div className="row mt-3">
        <div className="col-md-1">
       
          </div>
          <div className="col-md-7 my-auto justifyContent:center">
          </div>
    <div>
        <div style={{}}>
          <nav>
            <p>Test Application        <Link style={{color:'#000000',fontSize:"15px"}} to="/List">List</Link>     <Link style={{color:'#000000',fontSize:"15px"}}to="/MainForm">Form</Link></p> 
          </nav>
  
          <Switch>
            <Route path="/List">
              <List />
            </Route>
            <Route path="/MainForm">
            <MainForm/>
            </Route>
          </Switch>
        </div>
        </div>
      </div>
      </div>
      </Router>
  );
}

export default App;
