import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';
import classes from './MainHeader.css';
import List from '../ListFolder/List';
import MainForm from '../FormFolder/MainForm';


export default function App() {
    return (
    
      // <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link style={{color:'#333'}}to="/List">List</Link>
              </li>
              <li>
                <Link to="/MainForm">Form</Link>
              </li>
           
            </ul>
          </nav>
          </div>
    );
}