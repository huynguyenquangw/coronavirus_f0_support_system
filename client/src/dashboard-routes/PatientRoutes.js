import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../patient-components/Layout'

import SidebarItems from '../patient-components/Sidebar/SidebarItems'

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
