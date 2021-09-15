import React from 'react'
import { useContext } from 'react/cjs/react.development'
import Chat from '../../chat/Chat'
import { GlobalState } from '../../GlobalState'
function Patients(props) {
    const state = useContext(GlobalState)
    const [doctorInfo] = state.doctorAPI.doctorInfo
    const [isDoctor] = state.doctorAPI.doctor

    return (
        <div>
            {/* <Chat isDoctor={isDoctor} doctorInfo={doctorInfo} /> */}
        </div>
    )
}

export default Patients
