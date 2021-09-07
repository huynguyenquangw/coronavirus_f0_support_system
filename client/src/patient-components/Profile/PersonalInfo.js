import React from 'react'
import styled from 'styled-components'
import { info } from '../../api/PatientAPI'
import {Container , Field} from "../../css-template/Input"


function PersonalInfo() {
    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Full Name" value={info.name || ''}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email Address" value={info.email || ''}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input id="phone" type="text" placeholder="Full Name" value={info.phone || ''}></input>
            </Field>
        </Container>
    )
}

export default PersonalInfo
