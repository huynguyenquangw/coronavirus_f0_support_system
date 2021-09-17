import React from 'react'
// import styled from 'styled-components'
// import { info } from '../../api/PatientAPI'
import { Container, Field } from "../../css-template/Input"
import { useState, useEffect } from 'react'

function PersonalInfo({ info }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const onChangeValue = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(info)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [info])

    return (
        <div className="dashboardmain-container">
            <div className="field">
                <label htmlFor="name">Name</label>
                <input className="editable" name="name" id="name" type="text" placeholder="Full Name" value={user.name} onChange={onChangeValue}></input>
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input className="uneditable" name="email" id="email" type="text" placeholder="Email Address" value={user.email} onChange={onChangeValue} readOnly></input>
            </div>
            <div className="field">
                <label htmlFor="name">Phone</label>
                <input className="editable" name="phone" id="phone" type="text" placeholder="Full Name" value={user.phone} onChange={onChangeValue}></input>
            </div>
        </div>
    )
}

export default PersonalInfo
