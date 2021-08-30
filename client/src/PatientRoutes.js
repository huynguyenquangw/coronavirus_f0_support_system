import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Dashboard from './components/Main/Dashboard/Dashboard'
import DoctorChat from './components/Main/Doctor Chat/Doctor Chat'
import HealthStatus from './components/Main/Health Status/Health Status'
import Prescriptions from './components/Main/Prescriptions/Prescriptions'
import Profile from './components/Main/Profile/Profile'
import Layout from './components/Layout'

import SidebarItems from './components/Sidebar/SidebarItems'

function PatientRoutes() {

    const AllRoute = []


    for (let i = 0; i < SidebarItems.length; i++) {
        AllRoute.push(<Route key={SidebarItems[i].icon} path={SidebarItems[i].link} exact component={SidebarItems[i].component} />)
    }

    return (

        <Route render={(props) => (
            <Layout {...props}>
                <Switch>
                    {AllRoute}
                </Switch>
            </Layout>
        )} />
    )
}

export default PatientRoutes
