import React from 'react'
import styled from 'styled-components'
import {DoctorInfoFunction, DoctorInfo} from './DoctorInfo'
import {Container , Field} from "./InputTemplate"

function HomeAddress() {
    DoctorInfoFunction()
    return (
        <Container>
            <Field>
                <label htmlFor="district">District</label>
                <input id="district" type="text" placeholder="District" value={DoctorInfo.district}></input>
            </Field>
            <Field>
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="City" value={DoctorInfo.city}></input>
            </Field>
            <Field>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" placeholder="Full Name" value={DoctorInfo.postcode}></input>
            </Field>
            
            
        </Container>
    )
}

export default HomeAddress
