import React from 'react'
import styled from 'styled-components'
import {GetPatientInfo, PatientInfo} from './PatientInfo'
import {Container , Field} from "../../css-template/Input"

function HomeAddress() {
    GetPatientInfo()
    return (
        <Container>
            <Field>
                <label htmlFor="district">District</label>
                <input id="district" type="text" placeholder="District" value={PatientInfo.district || ''}></input>
            </Field>
            <Field>
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="City" value={PatientInfo.city || ''}></input>
            </Field>
            <Field>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" placeholder="Full Name" value={PatientInfo.postcode || ''}></input>
            </Field>
            
            
            
        </Container>
    )
}

export default HomeAddress
