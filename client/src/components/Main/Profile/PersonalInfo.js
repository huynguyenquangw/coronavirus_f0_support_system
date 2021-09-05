import React from 'react'
import styled from 'styled-components'
import {DoctorInfoFunction, DoctorInfo} from './DoctorInfo'
import {Container , Field} from "./InputTemplate"


function PersonalInfo() {
    DoctorInfoFunction()
    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Full Name" value={DoctorInfo.name}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email Address" value={DoctorInfo.email}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input id="phone" type="text" placeholder="Full Name" value={DoctorInfo.phone}></input>
            </Field>
            <Field>
                <label htmlFor="name">Role</label>
                <input id="role" type="text" placeholder="Role" value={DoctorInfo.Role}></input>
            </Field>
            <Field>
                <label htmlFor="name">Experience</label>
                <input id="experience" type="text" placeholder="Experience" value={DoctorInfo.Experience}></input>
            </Field>
            
        </Container>
    )
}

export default PersonalInfo
