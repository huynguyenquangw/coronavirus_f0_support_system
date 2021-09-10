import React from 'react'
import styled from 'styled-components'
import { info } from '../../api/PatientAPI'
import {Container , Field} from "../../css-template/Input"
import { useState, useEffect } from 'react'


function PersonalInfo() {

    const [user, setUser] = useState({
        name: info.name || "",
        email: info.email || "",
        phone: info.phone || ""
    })

    const onChangeValue = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    

    return (
        <Container>
            <Field>
                <label htmlFor="name">Name</label>
                <input name ="name" id="name" type="text" placeholder="Full Name" value={user.name} onChange={onChangeValue}></input>
            </Field>
            <Field>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" type="text" placeholder="Email Address" value={user.email} onChange={onChangeValue}></input>
            </Field>
            <Field>
                <label htmlFor="name">Phone</label>
                <input name="phone" id="phone" type="text" placeholder="Full Name" value={user.phone} onChange={onChangeValue}></input>
            </Field>
        </Container>
    )
}

export default PersonalInfo
