import React from 'react'
import styled from 'styled-components'
import { info } from '../../api/PatientAPI'
import { Container, Field } from "../../css-template/Input"
import {district as sourceDistrict}  from '../../api/API'
import { useState, useEffect } from 'react'

function HomeAddress() {

    const [district, setDistrict] = useState("")
    const [cityName, setCityName] = useState("")
    const [postcode, setPostcode] = useState("")
    
    useEffect(() => {
        setDistrict(info.district?._id)
        setCityName(info.district?.city?.name)
        setPostcode(info.district?.city?.postcode)
      },[])

    const handleChange = e => {
        setDistrict(e.target.value)
    }

    return (
        <Container>

            <Field>

            <label htmlFor="district">District</label>
                <select id="district" value={district} onChange={handleChange}>
                    {sourceDistrict.map(i =>
                        <option value={i._id}>{i.name}</option>
                    )}  
                    </select>
            </Field>

            <Field>
                <label htmlFor="city">City</label>
                <input id="city" type="text" placeholder="City" value={cityName} readOnly/>
            </Field>
            
            <Field>
                <label htmlFor="postcode">Postcode</label>
                <input id="postcode" type="text" placeholder="Full Name" value={postcode} readOnly/>
            </Field>


        </Container>
    )
}

export default HomeAddress
