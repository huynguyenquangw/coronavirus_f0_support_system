import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar'
import SidebarItems from './Sidebar/SidebarItems'

const Container = styled.div`
    width: 100vw;
    max-width: 75rem ;
`

const MainContainer = styled.div`
    box-sizing: border-box;
    padding: 2rem 3rem;
    display: inline-block;
    width: 80%;
    max-width: 60rem;

    *{
        display: block;
    }
`

const Spacer = styled.div`
    display: inline-block;
    width: 20%;
    max-width: 15rem;
`

const HeadingContainer = styled.div`
    color: #002341;
    height: 10%;
    max-height: 4.5rem;
    margin-bottom: 3rem;

    *{
        display: inline-block;
        vertical-align: middle;

    }

    img{
        height: 2.8rem;
    }

    h1{
    margin: 0.1rem 0 0 1rem;
    }
`

function Layout(props) {
    const location = useLocation();
    let HeadingTitle =""
    let HeadingIcon =""

    for (let i = 0; i<SidebarItems.length;i++) {
        if(SidebarItems[i].link === location.pathname){
            HeadingTitle = SidebarItems[i].title;
            HeadingIcon = SidebarItems[i].icon_blue;
        }
    }

    return (
        <Container>
            <Sidebar/>

            <Spacer></Spacer>

            <MainContainer>

                <HeadingContainer>
                    <img src={HeadingIcon}/>
                    <h1>{HeadingTitle}</h1>
                </HeadingContainer>
                {props.children}
                
            </MainContainer>

        </Container>
    )
}

export default Layout
