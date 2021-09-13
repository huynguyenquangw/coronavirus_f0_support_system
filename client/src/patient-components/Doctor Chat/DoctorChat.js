import React from 'react'
import { useContext } from 'react/cjs/react.development'
import styled from 'styled-components'
import Home from '../../chat/Home'
import { GlobalState } from '../../GlobalState'


function DoctorChat(props) {
    const state = useContext(GlobalState)
    const [patientInfo] = state.patientAPI.info
    const [isPatient] = state.patientAPI.patient
    // console.log({patientInfo});
    // console.log({isPatient});
    return (
        <div>
           <Home isPatient={isPatient} patientInfo={patientInfo} />
        </div>
    )
}

export default DoctorChat
