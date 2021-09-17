import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/logo.svg'
import styled from 'styled-components';
import menuIcon from '../assets/icons/menu.svg'
import closeIcon from '../assets/icons/menu-close.svg'
import { useState } from 'react';

//CSS Template

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: 75rem;
    margin: auto;
    max-height: 9rem;

    >*{
        flex-basis: 30%;
    }

    a{
        text-decoration: none;
    }

    @media screen and (max-width: 500px) {
        flex-flow: column wrap;
        width: 100vw;
        max-width: 100vw;
        margin: auto;
        max-height: 100vh;

        >*{
            width: 100%;
            flex-basis: 100%;
        }
    }
`

const LogoContainer = styled.div`
    display: flex;    
    justify-content: center;

    @media screen and (max-width: 500px){
        justify-content: space-between;
    }
`

const Logo = styled.img`
    width: 80%;
    max-height: 70%;
    max-width: 18rem;
    padding: 2rem;
    z-index: 1;

    @media screen and (max-width: 500px) {
        width: 60%;
        padding: 1rem;
    }
`
const Menu = styled.div`
    display: flex;
    flex: row nowrap;
    justify-content: center;
    align-items: center;
    z-index: 1;

    *{
        font-weight: 700;
        color: #002341;
        display: inline-block;
        padding: 1rem;
    }

    @media screen and (max-width: 500px) {
        
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex: row nowrap;
    justify-content: center;
    align-items: center;

    #register{
            margin-left: 1rem;
        }

    @media screen and (max-width: 500px) {
        flex-flow: column wrap;
        margin-top: 2rem;

        #register{
            margin-left: 0;
            margin-top: 0.8rem;
        }
    }
`

const Hamburger = styled.img`
    padding: 1rem;  
    display: none;
    @media screen and (max-width: 500px) {
        display: block;
    }
`
const HamburgerBackground = styled.div`
    background: #ffffff;
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: none;
`

const HamburgerClose = styled.img`
    position: absolute;
    padding: 1rem; 
    z-index: 1;
    top: 0;
    right: 0;
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
    }

`
export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            
            <div className="">
                <div className="">
                    <img className="" src={LogoImg} alt="logo" />
                    <img className="" src={menuIcon} onClick={setOpen(true)}/>
                    <img className="" src={closeIcon}/>
                </div>
                <div className=""></div>
                <div className="">
                    <Link to="/">Home</Link>
                    <Link to="/">How It Works</Link>
                    <Link to="/">Contact Us</Link>
                </div>

                <div className="">
                    <Link id="login" to="/login-portal" className="button blue">Login</Link>
                    <Link id="register" to="/register" className="button green">Register</Link>
                </div>
            </div>
        </>

    )
}