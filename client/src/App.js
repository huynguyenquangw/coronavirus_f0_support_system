import './App.css';
import './bootstrap.css';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login'
import TestProfile from './TestProfile';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (

    <div>
      <Router>
        {/* Switch  */}
        <div>
          {/* <hr /> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/user/profile">
              <TestProfile />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
