import React from 'react'
import styled from 'styled-components'
import InfoData from './InfoData'
import {Container , Field} from "./InputTemplate"


function PersonalInfo() {
    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Full Name" value={InfoData.name}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email Address" value={InfoData.email}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input id="phone" type="text" placeholder="Full Name" value={InfoData.phone}></input>
            </Field>
            
            
        </Container>
    )
}

export default PersonalInfo
