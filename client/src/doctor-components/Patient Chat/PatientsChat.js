import React from 'react'
import { useContext } from 'react/cjs/react.development'
import Home from '../../chat/Home'
import { GlobalState } from '../../GlobalState'
function Patients(props) {
    const state = useContext(GlobalState)
    const [doctorInfo] = state.doctorAPI.doctorInfo
    const [isDoctor] = state.doctorAPI.doctor

    console.log({ doctorInfo });
    console.log({ isDoctor });
    return (
        <div>
            <Home isDoctor={isDoctor} doctorInfo={doctorInfo} />
        </div>
    )
}

export default Patients
