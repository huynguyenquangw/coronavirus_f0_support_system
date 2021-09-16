import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom';
import "./GetHealthPatient.css"

function Patients(props) {
    const state = useContext(GlobalState)
    const [healthDeclares, setHealthDeclares] = state.getHealthDeclareForDoctor.healths
    const [filter, setFilter] = state.getHealthDeclareForDoctor.filter
    const [trueOrFalse, setTrueOrFalse] = state.getHealthDeclareForDoctor.trueOrFalse

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
                        <input type="radio" name="radiovalues"  value={ToF}
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
                            Patient Name
                        </th>
                        <th> Vaccinated</th>
                        <th> Covid</th>
                        <th> Status</th>
                    </tr>
                    {healthDeclares.map(health => (
                        <tr>
                            {trueOrFalse === 'true' ? (

                                <td key={health._id}> {health._id}</td>


                            ) : (
                                <Link to={`/doctor/prescriptions/medicine/${health._id}`}>
                                    <td> {health._id}</td>

                                </Link>
                            )}
                            <td key={health._id}>{health.user_id?.name}</td>
                            <td> {health.vaccinated ? "true" : "false"}</td>
                            <td> {health.covid ? "true" : "false"}</td>
                            <td> {health.status ? "true" : "false"}</td>
                        </tr>


                    ))}

                </table>


            </div>
        </div>
    )
}

export default Patients
