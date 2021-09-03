import './App.css';
import HomePage from './home-components/HomePage';
import Register from './home-components/Register';
import PatientRoutes from './dashboard-routes/PatientRoutes';
import AdminRoutes from './dashboard-routes/AdminRoutes'
import LoginPortal from './home-components/LoginPortal';
import LoginPatient from './home-components/LoginPatient';
import LoginDoctor from './home-components/LoginDoctor';
import LoginAdmin from './home-components/LoginAdmin'

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
              <LoginDoctor />
            </Route>
            <Route path="/admin-login">
              <LoginAdmin/>
            </Route>
            <Route path="/patient">
              <PatientRoutes />
            </Route>
            <Route path="/admin">
              <AdminRoutes />
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
