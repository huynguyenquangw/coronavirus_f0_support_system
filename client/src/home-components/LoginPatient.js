import Navbar from "./Navbar"
import { useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function LoginPatient() {
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

    //Register check
    const loginSubmit = async e => {
        e.preventDefault()


        try {
            setLoading(true)
            const response = await axios.post(endPoint + "/user/login", { ...user })
            // console.log(response)
            // console.log(response.data.accessToken)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('isLogin', true)
            toast(`User ${user.email} has been successfully login !`)
            setLoading(false)
            //Change url to profile page
            // setTimeout( window.location.replace('/'), 10000)
            history.push('/patient/profile')
            // window.location.replace('/')


        } catch (error) {
            //toast error
            toast(error.response.data.msg)
            setLoading(false)

        }


    }

    return (
        <div>
            <Navbar />

            <div className="grid-container2">
                <div className="item1"></div>
                <div className="item2">   <div className='reg1'>
                    Login as a patient account
                </div>
                    <div className='reg2'>
                    </div>
                    <br />
                    <div style={{width: "70%", margin: "auto"}}>
                        <form onSubmit={loginSubmit}>
                            <input type="email" className="no3" id="email" name="email" value={user.email} onChange={onChangeValue} placeholder="Email.." />
                            <br />
                            <input type="text" className="no3" id="password" name="password" value={user.password} onChange={onChangeValue} placeholder="Password.." />
                            <br />
                            <input type="submit" value="Log In" className="button blue"/>
                        </form>
                    </div></div>
                <div className="item3"></div>

            </div>

        </div>

    )
}