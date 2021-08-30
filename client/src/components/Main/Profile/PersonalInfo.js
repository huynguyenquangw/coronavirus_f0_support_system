import React from 'react'
import styled from 'styled-components'
import {PatientInfoFunction, PatientInfo} from './PatientInfo'
import {Container , Field} from "./InputTemplate"


function PersonalInfo() {
    PatientInfoFunction()
    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Full Name" value={PatientInfo.name}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email Address" value={PatientInfo.email}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input id="phone" type="text" placeholder="Full Name" value={PatientInfo.phone}></input>
            </Field>
        </Container>
    )
}

export default PersonalInfo
