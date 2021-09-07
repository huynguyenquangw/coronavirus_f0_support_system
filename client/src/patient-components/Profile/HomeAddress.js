import React from 'react'
import styled from 'styled-components'
import { info } from '../../api/PatientAPI'
import {Container , Field} from "../../css-template/Input"

function HomeAddress() {
    return (
        <Container>
            <Field>
                <label htmlFor="district">District</label>
                <input id="district" type="text" placeholder="District" value={info.district?.name || ''}></input>
            </Field>
            <Field>
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="City" value={info.district?.city?.name || ''}></input>
            </Field>
            <Field>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" placeholder="Full Name" value={info.district?.city?.postcode || ''}></input>
            </Field>
            
            
        </Container>
    )
}

export default HomeAddress
