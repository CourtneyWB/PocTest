import React from "react";
import './App.css';
import List from './Components/List';
import MainHeader from './Components/MainHeader';
import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="List">
  {/* <h1>Hello this is Courtney's test poc</h1> */}
      <List/>  
    </div>

  );
}

export default App;
