import React from 'react'
import "./doctor.css"
import { useHistory } from 'react-router'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import { useState, useEffect } from "react";

function Doctors(props) {
    const endPoint = "http://localhost:3000"
    const [data, setData] = useState([]);

    const [doctor, setDoctor] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [district, setDistrict] = useState([])


   //Register check
   const registerSubmit = async e => {
    console.log(typeof doctor.email )
    e.preventDefault()

    if(doctor.password.length < 6 ){
        toast(("Password must be at least 6 characters ! "))
        return false;
    }
    if(doctor.name.length < 1 ){
        toast(("Please insert the Doctor name "))
        return false;
    }else {
        try {
            const response = await axios.post(endPoint + "/doctor/register", { ...doctor }, {
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        })
            load()
            toast(`Doctor ${doctor.email} has been successfully registered !`)

        } catch (error) {
            toast(error.response.data.msg)
            toast(error.response.data.msg)

        }
    }

}
    //On change for user
    const onChangeValue = e => {
        const { name, value } = e.target
        setDoctor({ ...doctor, [name]: value })
    }

    const load = () => {
        fetch(endPoint + "/doctor?limit=999999999")
            .then(response => response.json())
            .then(item => setData(item.data));
    }

    //load data automatically
    useEffect(() => {
        load()
    }, [])
    console.log(data)
    return (
        <div>
            {/* <h1 style={{ fontSize: "10em" }}>Doctors</h1> */}

            <div>
            <h2 class="list"> Doctor Register</h2>
            <form onSubmit={registerSubmit}>
                            <input type="text" className="no3" id="name" name="name" placeholder="Name.." value={doctor.name} onChange={onChangeValue} />
                            <br />
                            <input type="email" className="no3" id="email" name="email" placeholder="Email.." value={doctor.email} onChange={onChangeValue} />
                            <br />
                            <input type="text" className="no3" id="password" name="password" placeholder="Password.." value={doctor.password} onChange={onChangeValue} />
                            <br />
                            <input type="submit" value="Register" className="button green" />
                        </form>
            </div>

            <h2 class="list"> Doctor List</h2>
            <div >
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>District</th>
                    </tr>
                    {data.map(i => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                            <td>{i.district?.name}</td>
                        </tr>
                    ))}

                </table>
            </div>


        </div>
    )
}

export default Doctors
