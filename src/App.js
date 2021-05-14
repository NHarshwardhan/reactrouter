/* import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Employee from './Components/Employee';
import Departments from './Components/Departments';
import Project from './Components/Project';

function App() {
  return (
     <BrowserRouter>
       <div>
       <h2>Welcome to JUNGLE...</h2>
       <ul>
          <li><Link to="/employee">Employees</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/projects">Projects</Link></li>
       </ul>
       <Route path="/employee" component={Employee}></Route>
       <Route path="/departments" component={Departments}></Route>
       <Route path="/projects" component={Project}></Route>
     </div>
     </BrowserRouter>
  );
}

export default App; */
/* 
 Link component uses the to prop to describe the location where the links should navigate to
*/
/* 
Now we want one component who can understand user navigation and display respective component's content
or
(Route) need a  component will now help us to establish the link between component’s UI and the URL.
*/

/* 
 lets include React Router component to the application
 Add BrowserRouter aliased as Router to your app.js file in order to wrap all the other components.
 BrowserRouter is a parent component and can have only single child.
*/



// Example 2 with SWITCH and EXACT
/* 
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Route, Switch } from 'react-router-dom';
import Employee from './Components/Employee';
import Departments from './Components/Departments';
import Project from './Components/Project';

function App() {
  return (
     <BrowserRouter>
       <div>
       <h2>Welcome to JUNGLE...</h2>
       <ul>
          <li><Link to="/">Employees</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/projects">Projects</Link></li>
       </ul>
       
          <Switch>
            <Route exact path="/" component={Employee}></Route>
            <Route path="/departments" component={Departments}></Route>
            <Route path="/projects" component={Project}></Route>
            <Route path="/departments" component={Employee}></Route>
      
          </Switch>
     </div>
     </BrowserRouter>
  );
}

export default App; */


// Example 3: NavLink ,Invalid URL
/* 
 another type of link that can style itself as active when "to" properties matches current location
  Define css in index.html testClass 
*/
/* 
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Route, Switch,NavLink } from 'react-router-dom';
import Employee from './Components/Employee';
import Departments from './Components/Departments';
import Project from './Components/Project';
import InvalidUrl from './Components/InvalidUrl'

function App() {
  return (
     <BrowserRouter>
       <div>
       <h2>Welcome to JUNGLE...</h2>
       <ul>
          <li><Link to="/">Employees</Link></li>
          <li><NavLink to="/departments" activeClassName="testClass">Departments</NavLink></li>
          
          <li><NavLink to="/projects" activeClassName="testClass">Projects</NavLink></li>
       </ul>
       
          <Switch>
            
            <Route exact path="/" component={Employee}></Route>
            <Route path="/departments" component={Departments}></Route>
            <Route path="/projects" component={Project}></Route>       
            <Route component={InvalidUrl}></Route>
      
          </Switch>
     </div>
     </BrowserRouter>
  );
}

export default App; */



//Example 4 : url parameter,Edit Employee

import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Route, Switch,NavLink } from 'react-router-dom';
import Employee from './Components/Employee';
import Departments from './Components/Departments';
import Project from './Components/Project';
import InvalidUrl from './Components/InvalidUrl'
import EditEmployee from './Components/EditEmployee'
import Login from './Components/Login'
import Profile from './Components/Profile'
import SecureRoute from './Components/SecureRoute'

function App() {
  const authentication={
    isLogged:false,
    onAuthentication(){
        this.isLogged=true
    },
    getLoginStatus(){
        return this.isLogged
    }
}
  return (
     <BrowserRouter>
       <div>
       <h2>Welcome to JUNGLE...</h2>
       <ul>
          <li><NavLink to="/" >Employees</NavLink></li>
          <li><NavLink to="/departments" activeClassName="testClass">Departments</NavLink></li>
          <li><NavLink to="/profile" activeClassName="testClass">Profile</NavLink></li>
          <li><NavLink to="/projects" activeClassName="testClass">Projects</NavLink></li>
          <li><NavLink to={{pathname:"/login", auth:authentication}} activeClassName="testClass">Login</NavLink></li>
       </ul>
       <hr/>
       
          <Switch>
            
            <Route exact path="/" component={Employee}></Route>
            <Route path="/departments" component={Departments}></Route>
            <Route path="/employee/:id" component={EditEmployee}></Route>
            <Route path="/projects" component={Project}></Route>      
            {/* <Route path="/profile" component={Profile}></Route>    */}
            <SecureRoute auth={authentication} path="/profile" component={Profile}></SecureRoute>  
            <Route  path="/login" component={Login}></Route>   
            <Route component={InvalidUrl}></Route>
      
          </Switch>
     </div>
     </BrowserRouter>
  );
}

export default App;