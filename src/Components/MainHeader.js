import { BrowserRouter as Router,Switch,Route,Link, BrowserRouter } from 'react-router-dom';
import classes from './MainHeader.css';
import List from './List';
import Form from './Form';


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
                <Link to="/Form">Form</Link>
              </li>
           
            </ul>
          </nav>
          </div>
    );
}