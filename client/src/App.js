import './App.css';
import HomePage from './home-components/HomePage';
import Register from './home-components/Register';
import Login from './home-components/LoginPatient'
import PatientRoutes from './dashboard-routes/PatientRoutes';
import LoginPortal from './home-components/LoginPortal';
import LoginPatient from './home-components/LoginPatient';
import LoginDoctor from './home-components/LoginDoctor';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Test from './Test';

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
            <Route path="/login-portal">
              <LoginPortal />
            </Route>
            <Route path="/login-patient">
              <LoginPatient />
            </Route>
            <Route path="/login-doctor">
              <Login />
            </Route>
            <Route path="/patient">
              <PatientRoutes />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
