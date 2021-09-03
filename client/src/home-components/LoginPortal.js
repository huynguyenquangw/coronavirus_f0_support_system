import Navbar from "./Navbar"
import DoctorPhoto from '../assets/images/doctor.png'
import styled from "styled-components"
import { Link } from 'react-router-dom';

export default function LoginPortal() {

    const Main = styled.div`
    width: 35%;
    max-width: 20rem ;
    margin: auto;

    >a{
        margin-bottom: 1rem;
        display: block;
    }
`
    return (
        <div>
            <Navbar />
            <Main>
               <Link to="/login-doctor" class="button green">
                Login as Doctor
               </Link>
               
               <Link to="/login-patient" class="button green">
               Login as Patient 
               </Link>

            </Main>
        </div>

    )
}
