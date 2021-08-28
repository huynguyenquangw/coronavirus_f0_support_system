import React from 'react'
import styled from 'styled-components'
import InfoData from './InfoData'
import {Container , Field} from "./InputTemplate"

function HomeAddress() {
    return (
        <Container>
            <Field>
                <label htmlFor="district">District</label>
                <input id="district" type="text" placeholder="Full Name" value={InfoData.district}></input>
            </Field>
            <Field>
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="Email Address" value={InfoData.city}></input>
            </Field>
            <Field>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" placeholder="Full Name" value={InfoData.postcode}></input>
            </Field>
            
            
        </Container>
    )
}

export default HomeAddress
