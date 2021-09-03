import prescriptions from '../../assets/icons/prescriptions.svg'
import prescriptionsActive from '../../assets/icons/prescriptions-active.svg'
import prescriptionsBlue from '../../assets/icons/prescriptions-blue.svg'
import profile from '../../assets/icons/profile.svg'
import profileActive from '../../assets/icons/profile-active.svg'
import profileBlue from '../../assets/icons/profile-blue.svg'
import health from '../../assets/icons/health-status.svg'
import healthActive from '../../assets/icons/health-status-active.svg'
import healthBlue from '../../assets/icons/health-status-blue.svg'
import chat from '../../assets/icons/chat.svg'
import chatActive from '../../assets/icons/chat-active.svg'
import chatBlue from '../../assets/icons/chat-blue.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import dashboardActive from '../../assets/icons/dashboard-active.svg'
import dashboardBlue from '../../assets/icons/dashboard-blue.svg'

import Dashboard from '../Main/Dashboard/Dashboard'
import DoctorChat from '../Main/Doctor Chat/Doctor Chat'
import HealthStatus from '../Main/Health Status/Health Status'
import Prescriptions from '../Main/Prescriptions/Prescriptions'
import Profile from '../Main/Profile/Profile'

const SourceUrl = "/patient"

const SidebarItems = [

        {title: 'Dashboard', 
        component: Dashboard,
        icon: dashboard, 
        icon_active: dashboardActive, icon_blue: dashboardBlue,
        link: '' },

        {title: 'Profile', 
        component: Profile,
        icon: profile , 
        icon_active: profileActive, icon_blue: profileBlue,
        link: '/profile'},

        {title: 'Health Status', 
        component: HealthStatus,
        icon: health , icon_active: healthActive , icon_blue: healthBlue,
        link:'/health'},

        {title: 'Prescriptions', 
        component: Prescriptions,
        icon: prescriptions , icon_active: prescriptionsActive , icon_blue: prescriptionsBlue,
        link: '/prescriptions'},
        
        {title: 'Doctor Chat', 
        component: DoctorChat,
        icon: chat , icon_active: chatActive , icon_blue: chatBlue,
        link:  '/chat'}        
    ];

    for (let i = 0; i<SidebarItems.length;i++) {
        SidebarItems[i].link = SourceUrl + SidebarItems[i].link
    }
export default SidebarItems;