import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom';

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
                        {ToF}
                        <input type="radio" name="radiovalues" value={ToF}
                            onChange={e => setTrueOrFalse(e.target.value)}
                            checked={ToF === trueOrFalse} id={ToF}
                        />
                    </label>
                ))}
            </div>

            <div className="display">
                {healthDeclares.map(health => (
                    <>
                        {trueOrFalse === 'true' ? (
                            <div key={health._id}>
                                {health._id}
                                {health.user_id?.name}
                            </div>
                        ) : (
                            <Link to={`/doctor/prescriptions/medicine/${health._id}`}>
                                {health._id}
                                {health.user_id?.name}
                            </Link>
                        )}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Patients
