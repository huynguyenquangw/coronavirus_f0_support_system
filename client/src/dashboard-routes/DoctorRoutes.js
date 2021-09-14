import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../Layout'

import DoctorSidebarItems from '../sidebar/DoctorSidebarItems'

function PatientRoutes() {

    const AllRoute = []

    if (DoctorSidebarItems && DoctorSidebarItems.length > 0) {
        for (let i = 0; i < DoctorSidebarItems.length; i++) {
            AllRoute.push(<Route key={DoctorSidebarItems[i].icon} path={DoctorSidebarItems[i].link} exact component={DoctorSidebarItems[i].component} />)
        }
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
