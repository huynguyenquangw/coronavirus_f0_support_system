
import dashboard from '../assets/icons/dashboard.svg'
import dashboardActive from '../assets/icons/dashboard-active.svg'
import dashboardBlue from '../assets/icons/dashboard-blue.svg'
import patients from '../assets/icons/patients.svg'
import patientsActive from '../assets/icons/patients-active.svg'
import patientsBlue from '../assets/icons/patients-blue.svg'
import doctors from '../assets/icons/doctors.svg'
import doctorsActive from '../assets/icons/doctors-active.svg'
import doctorsBlue from '../assets/icons/doctors-blue.svg'
import pharmacies from '../assets/icons/pharmacies.svg'
import pharmaciesActive from '../assets/icons/pharmacies-active.svg'
import pharmaciesBlue from '../assets/icons/pharmacies-blue.svg'

import Dashboard from '../admin-components/Dashboard/Dashboard'
import Patients from '../admin-components/Patients/Patients'
import Doctors from '../admin-components/Doctors/Doctors'
import Pharmacies from '../admin-components/Pharmacies/Pharmacies'

const SourceUrl = "/admin"

const PatientSidebarItems = [

        {title: 'Dashboard', 
        component: Dashboard,
        icon: dashboard, 
        icon_active: dashboardActive, icon_blue: dashboardBlue,
        link: '' },

        {title: 'Patients', 
        component: Patients,
        icon: patients , 
        icon_active: patientsActive, icon_blue: patientsBlue,
        link: '/patients'},

        {title: 'Doctors', 
        component: Doctors,
        icon: doctors , 
        icon_active: doctorsActive , icon_blue: doctorsBlue,
        link:'/doctors'},

        {title: 'Pharmacies', 
        component: Pharmacies,
        icon: pharmacies , icon_active: pharmaciesActive , icon_blue: pharmaciesBlue,
        link: '/pharmacies'},
    ];

    for (let i = 0; i<PatientSidebarItems.length;i++) {
        PatientSidebarItems[i].link = SourceUrl + PatientSidebarItems[i].link
    }
export default PatientSidebarItems;