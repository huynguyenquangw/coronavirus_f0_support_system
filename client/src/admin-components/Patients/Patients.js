import React from 'react'
import { useState, useEffect } from "react";
// import "./patient.css"
function Patients(props) {
    const endPoint = "http://localhost:3000"
    const [data, setData] = useState([]);


    const load = () => {
        fetch(endPoint + "/user?limit=999999999")
            .then(response => response.json())
            .then(item => setData(item.data));
    }

    //load data automatically
    useEffect(() => {
        load()
    }, [])

    return (
        <div>
            {/* <h1 style={{fontSize: "10em"}}>Patients</h1> */}
 
            <h2 class="list"> Patient List</h2>
            <div >
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>District</th>
                        <th>City</th>


                    </tr>
                    {data.map(i => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.phone}</td>
                            <td>{i.district?.name}</td>
                            <td>{i.district?.city?.name}</td>
                        </tr>
                    ))}

                </table>
            </div>
        
        </div>
    )
}

export default Patients