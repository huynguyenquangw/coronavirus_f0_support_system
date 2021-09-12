import React, { useContext } from 'react'
import { useState, useEffect } from "react";
import FilterPatient from '../../Feature/FilterPatient';
import { GlobalState } from '../../GlobalState';
// import "./patient.css"
function Patients(props) {
    const state = useContext(GlobalState)
    const [data,setData] = state.getAllPatientAPI.patients
    console.log(data)


  

    return (
        <div>
            {/* <h1 style={{fontSize: "10em"}}>Patients</h1> */}

            <FilterPatient/>
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
