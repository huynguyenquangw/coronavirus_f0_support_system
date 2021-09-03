import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import { useLocation } from 'react-router-dom';
import SidebarItems from '../SidebarItems';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 50%;
    max-height: 23rem;
`

function Menu() {
    const location = useLocation();

    const SidebarItemsRender = [];

    for (let i = 0; i<SidebarItems.length;i++) {

        if(SidebarItems[i].link === location.pathname){
            SidebarItemsRender.push(
                <MenuItem 
                key={SidebarItems[i].title}
                title ={SidebarItems[i].title} 
                icon={SidebarItems[i].icon_active} 
                link={SidebarItems[i].link} 
                active/>
            )
        }else{
            SidebarItemsRender.push(
                <MenuItem 
                key={SidebarItems[i].title}
                title ={SidebarItems[i].title} 
                icon={SidebarItems[i].icon} 
                link={SidebarItems[i].link}/>
            )
        }
    }
    


    return ( 
        <Container>
            {SidebarItemsRender}
        </Container>
    )
}

export default Menu