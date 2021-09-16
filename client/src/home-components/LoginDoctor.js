import Navbar from "./Navbar"
import { useContext, useState } from 'react';
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function LoginDoctor() {

    const endPoint = "http://localhost:3000"
    const [doctor, setDoctor] = useState({
        email: '',
        password: '',
    })
    // chay Loading effect 
    const [loading, setLoading] = useState(false)

    //On change for doctor
    const onChangeValue = e => {
        const { name, value } = e.target
        setDoctor({ ...doctor, [name]: value })
    }

    //Register check
    const loginSubmit = async e => {
        e.preventDefault()

        setLoading(true)

        // await fetch(endPoint + "/doctor/login", {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         email: doctor.email,
        //         password: doctor.password
        //     }),
        //     credentials: 'include'
        // }).then(response => response.json())
        //     .then(data => {
        //         toast(error.response.data.msg)
        //         localStorage.setItem('isDoctorLogin', true)
        //         // toast(`Doctor ${doctor.email} has been successfully login !`)
        //         setLoading(false)
        //     })
        //     .catch(error => {
        //         setLoading(false)
        //         toast(error.response.data.msg)
        //     })

        try {

            setLoading(true)
            
            const response = await axios.post(endPoint + "/doctor/login", { ...doctor },
            {withCredentials: 'include'})

            localStorage.setItem('isDoctorLogin', true)
            toast(`Doctor ${doctor.email} has been successfully login !`)
            setLoading(false)
            window.location.replace('/doctor/profile')
            
        } catch (error) {
            setLoading(false)
            toast(error.response.data.msg)
        }
    }

    return (
        <div>
            <Navbar />

            <div className="grid-container2">
                <div className="item1"></div>
                <div className="item2">   <div className='reg1'>
                    Login as a doctor account
                </div>
                    <div className='reg2'>
                    </div>
                    <br />
                    <div style={{ width: "70%", margin: "auto" }}>
                        <form onSubmit={loginSubmit}>
                            <input type="email" className="no3" id="email" name="email" value={doctor.email} onChange={onChangeValue} placeholder="Email.." />
                            <br />
                            <input type="text" className="no3" id="password" name="password" value={doctor.password} onChange={onChangeValue} placeholder="Password.." />
                            <br />
                            <input type="submit" value="Log In" className="button blue" />
                        </form>
                    </div></div>
                <div className="item3"></div>

            </div>

        </div>

    )
}