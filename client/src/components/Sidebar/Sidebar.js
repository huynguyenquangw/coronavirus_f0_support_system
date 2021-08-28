import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'

// import assets
import logo from '../../assets/images/logo.svg'

const Container =styled.div`
    background-color: #FFFFFF;
    box-shadow: var(--shadow-green);
    position: fixed;
    height: 100vh;
    width: 20%;
    max-width: 15rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`

const Item = styled.div`
    width: 100%;
    height: 10%;
    max-height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 80%;
    max-width: 12rem;
`

function Sidebar({active}) {

    return (
    <Container>
        <Item>
            <Logo src={logo}/>
        </Item>

        <Menu/>
        
        <Item>
            <h2 style={{color: "#616161"}}>Log out</h2>
        </Item>
    </Container>
    )
}

export default Sidebar
