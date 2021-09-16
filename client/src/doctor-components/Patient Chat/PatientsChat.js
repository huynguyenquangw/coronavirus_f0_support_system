import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom';
import addMedicine from '../../assets/icons/prescriptions.svg'

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

    console.log(healthDeclares);

    return (
        <div>
            <select name="filter" id="filter" value={filter} onChange={e => setFilter(e.target.value)}>
                {filterName.map((name, i) =>
                    <option key={i} value={name}>{name}</option>
                )}
            </select>

            <div className="true-false">
                {trueorfalse.map((ToF, i) => (
                    <label key={i} htmlFor={ToF}>
                        {ToF === 'true' ? 'prescribed' : 'unprescribed'}
                        <input type="radio" name="radiovalues" value={ToF}
                            onChange={e => setTrueOrFalse(e.target.value)}
                            checked={ToF === trueOrFalse} id={ToF}
                        />
                    </label>
                ))}
            </div>

            <table className="display">
                <thead>
                    <tr>
                        <th>health declaration ID</th>
                        <th>patient</th>
                        <th>covid</th>
                        <th>vaccinated</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                {healthDeclares.map(health => (
                    <tbody key={health._id}>
                        <tr>
                            <td>{health._id}</td>
                            <td>{health.user_id?.name}</td>
                            <td>{health.covid ? 'positive' : 'negative'}</td>
                            <td>{health.vaccinated ? 'approved' : 'disapproved'}</td>
                            <td>{health.status ? 'got medicine' : 'no medicine'}</td>
                            <td>
                                <button>view health</button>
                                {trueOrFalse === 'false' &&
                                    <Link to={`/doctor/prescriptions/medicine/${health._id}`}>
                                        <img src={addMedicine} alt="" />
                                    </Link>
                                }
                                {trueOrFalse === 'true' &&
                                    <button>view medicine</button>
                                }
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default Patients
