import React from 'react'
import styled from 'styled-components'
import {GetPatientInfo, PatientInfo} from './PatientInfo'
import {Container , Field} from "../../css-template/Input"


function PersonalInfo() {
    GetPatientInfo()
    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Full Name" value={PatientInfo.name || ''}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email Address" value={PatientInfo.email || ''}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input id="phone" type="text" placeholder="Phone Number" value={PatientInfo.phone || ''}></input>
            </Field>
            <Field>
                <label htmlFor="name">Role</label>
                <input id="role" type="text" placeholder="Role" value={PatientInfo.role || ''}></input>
            </Field>
            <Field>
                <label htmlFor="name">Experience</label>
                <input id="experience" type="text" placeholder="Experience" value={PatientInfo.experience || ''}></input>
            </Field>
        </Container>
    )
}

export default PersonalInfo
