import Navbar from "./Navbar"
import { useContext, useState } from 'react';
import { useHistory } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function LoginDoctor() {
    
    const history = useHistory()
    const endPoint = "http://localhost:3000"
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    // chay Loading effect 
    const [loading, setLoading] = useState(false)

    //On change for user
    const onChangeValue = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const getrf = async () => {
        await fetch("http://localhost:3000/doctor/refresh_token", {
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
    }


    //Register check
    const loginSubmit = async e => {
        e.preventDefault()


        try {

            setLoading(true)

            await fetch(endPoint + "/doctor/login", {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                }),
                credentials: 'include'
            }).then(response => response.json())
            
            localStorage.setItem('isLogin', true)
            toast(`Doctor ${user.email} has been successfully login !`)
            window.location.replace('/doctor')
            // getRole(response.data.accessToken)

            setLoading(false)

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
                            <input type="email" className="no3" id="email" name="email" value={user.email} onChange={onChangeValue} placeholder="Email.." />
                            <br />
                            <input type="text" className="no3" id="password" name="password" value={user.password} onChange={onChangeValue} placeholder="Password.." />
                            <br />
                            <input type="submit" value="Log In" className="button blue" />
                        </form>
                    </div></div>
                <div className="item3"></div>

            </div>

        </div>

    )
}