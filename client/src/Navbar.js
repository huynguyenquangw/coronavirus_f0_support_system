import { Link } from 'react-router-dom';
import LogoImg from './assets/images/logo.svg'
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex: row nowrap;
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
`
const Logo = styled.img`
    width: 80%;
    max-height: 70%;
    max-width: 18rem;
    padding: 2rem;
`
const Menu = styled.div`
    display: flex;
    flex: row nowrap;
    justify-content: center;
    align-items: center;

    *{
        font-weight: 700;
        color: #002341;
        display: inline-block;
        padding: 1rem;
    }
`
const ButtonContainer = styled.div`
    display: flex;
    flex: row nowrap;
    justify-content: center;
    align-items: center;

    a{
        font-weight: 700;
        color: #ffffff;
        display: inline-block;
        padding: 0.8rem 1.8rem;
        border-radius: 0.4rem;
        margin-left: 1rem;
        transition: 0.1s;
    }

    a:hover{
        padding: 1rem 2rem;
    }



    #login{
        background: var(--gradient-blue);
        box-shadow: var(--shadow-blue);
    }

    #register{
        background: var(--gradient-green);
        box-shadow: var(--shadow-green);
    }
`



export default function Navbar() {

    return (
        <Container>
            <div>
                <Logo src={LogoImg} alt="logo" />
            </div>

            <Menu>
                <Link to="/">Home</Link>
                <Link to="/">How It Works</Link>
                <Link to="/">Contact Us</Link>
            </Menu>

            <ButtonContainer>
                <Link to="/login" id="login">Login</Link>
                <Link to="/register" id="register">Register</Link>
            </ButtonContainer>


            {/* <ul>
                <li style={{ width: '30%' }}>
                    <img src={Logo} alt="" style={{ width: '60%' }} />
                </li>
                <li id='nav1'>
                    <Link to="/"  >
                        <a href="#"> Home</a>
                    </Link>
                </li>
                <li id='nav1'>
                    <Link to="/"  >
                        <a href="#"> How It Works</a>
                    </Link>
                </li>
                <li id='nav1'>
                    <Link to="/"  >
                        <a href="#"> Contact Us</a>
                    </Link>
                </li>
                <li id='right'>
                    <Link to="/register" style={{ paddingRight: '30px' }}>
                        <button type="button" class="registerButton" >Register</button>
                    </Link>
                </li>
                <li id='right'>
                    <Link to="/login" style={{ paddingRight: '20px' }} >
                        <button type="button" class="logInButton" id="bt1">Login</button>
                    </Link>
                </li>
              
            </ul> */}

        </Container>

    )
}