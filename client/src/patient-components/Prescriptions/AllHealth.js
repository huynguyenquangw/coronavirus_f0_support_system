import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom';
import "../../doctor-components/Patient Chat/GetHealthPatient.css"
import MedicinePopup from './MedicinePopup';
import { useState } from 'react/cjs/react.development';
import viewMedicine from '../../assets/icons/view-medicine.svg'

function AllHealth(props) {
    const state = useContext(GlobalState)
    const [healthDeclares, setHealthDeclares] = state.getHealthDeclareForPatient.healths
    const [filter, setFilter] = state.getHealthDeclareForPatient.filter
    const [trueOrFalse, setTrueOrFalse] = state.getHealthDeclareForPatient.trueOrFalse
    const [modalDisplay, setModalDisplay] = useState(false)

    const trueorfalse = ["true", "false"]
    const filterName = [
        "fever", "cough", "breathing", "sorethroat", "phlegm", "runnynose", "tiredness",
        "blocknose", "losssmell", "musclepain", "vaccinated", "covid", "status"
    ]
    console.log(healthDeclares)




    return (
        <div>
            

            <label > Choose a conditions:</label>

            <select className="filterCondition" name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
                {filterName.map((name, i) =>
                    <option key={i} value={name}>{name}</option>
                )}
            </select>

            <div className="true-false">
                <label className="radioStyle" > Check:</label>
                {trueorfalse.map((ToF, i) => (
                    <label key={i} htmlFor={ToF}>
                        {ToF}
                        <input type="radio" name="radiovalues" value={ToF}
                            onChange={e => setTrueOrFalse(e.target.value)}
                            checked={ToF === trueOrFalse} id={ToF}
                        />
                    </label>
                ))}
            </div>
            <br />

            <div className="display">
                <table>
                    <tr>
                        <th>
                            Health Declaration ID
                        </th>
                        <th>
                            Doctor name
                        </th>
                        <th> Vaccinated</th>
                        <th> Covid</th>
                        <th> Status</th>
                        <th  style={{textAlign: "center"}}> View Prescription</th>
                    </tr>
                    {healthDeclares.map(health => (
                        <tr>
                            {trueOrFalse === 'true' ? (

                                <td key={health._id} > {health._id}</td>


                            ) : (

                                <td>
                                    <Link to={`/doctor/prescriptions/medicine/${health._id}`}>
                                        {health._id}
                                    </Link>
                                </td>


                            )}
                            <td key={health._id}>{health.doctor_id?.name}</td>
                            <td> {health.vaccinated ? "true" : "false"}</td>
                            <td> {health.covid ? "true" : "false"}</td>
                            <td> {health.status ? "true" : "false"}</td>
                            <td style={{ cursor: "pointer", textAlign: "center" }} onClick={() => { setModalDisplay(true) }}>
                                <img class="hover" src={viewMedicine} />
                            </td>
                            <td><MedicinePopup modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} healthData={health }medicineData={health.medicineform_id}/></td>
                        </tr>


                    ))}

                </table>


            </div>
        </div>
    )
}

export default AllHealth
