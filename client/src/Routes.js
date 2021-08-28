import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Main/Dashboard/Dashboard'
import DoctorChat from './components/Main/Doctor Chat/Doctor Chat'
import HealthStatus from './components/Main/Health Status/Health Status'
import Prescriptions from './components/Main/Prescriptions/Prescriptions'
import Profile from './components/Main/Profile/Profile'
import Layout from './components/Layout'

function Routes() {
    return (
        <Router>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/chat" component={DoctorChat}/>
                        <Route path="/prescriptions" component={Prescriptions}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/health" component={HealthStatus}/>
                    </Switch>
                </Layout>   
            )}/>
        </Router>
    )
}

export default Routes
