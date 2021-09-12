import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './home-components/HomePage';
import Register from './home-components/Register';
import PatientRoutes from './dashboard-routes/PatientRoutes';
import DoctorRoutes from './dashboard-routes/DoctorRoutes';
import AdminRoutes from './dashboard-routes/AdminRoutes'
import LoginPortal from './home-components/LoginPortal';
import LoginPatient from './home-components/LoginPatient';
import LoginDoctor from './home-components/LoginDoctor';
import LoginAdmin from './home-components/LoginAdmin'
import Home from './chat/Home'

import { useContext } from 'react';
import {GlobalState} from './GlobalState'

function Routes() {

    const state = useContext(GlobalState)
    const [admin] = state.patientAPI.admin
    const [patient] = state.patientAPI.patient

    return (
        <Router>
        <div>
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
              <LoginAdmin />
            </Route>
            <Route path="/patient">
            {patient ? <PatientRoutes /> : <LoginPortal/>}  
            </Route>
            <Route path="/doctor">
              <DoctorRoutes />
            </Route>
            <Route path="/admin">
              {admin ? <AdminRoutes /> : <LoginPortal/>}
            </Route>
            <Route path="/chathome">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default Routes
