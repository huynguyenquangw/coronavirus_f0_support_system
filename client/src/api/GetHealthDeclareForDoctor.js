import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetHealthDeclareForDoctor(token) {
    const [healths, setHealths] = useState([])
    const [callback, setCallBack] = useState(false)
    const [filter, setFilter] = useState('status')
    const [trueOrFalse, setTrueOrFalse] = useState("false")
    const getHealth = async () => {
        const res = await axios.get(`http://localhost:3000/health/doctor?limit=9999&${filter}=${trueOrFalse}`, {
            headers: { Authorization: token }
        })
        setHealths(res.data.data)
    }

    useEffect(() => {
        if (token) getHealth()
    }, [token, callback, filter, trueOrFalse])

    return {
        healths: [healths, setHealths],
        callback: [callback, setCallBack],
        filter: [filter, setFilter],
        trueOrFalse: [trueOrFalse, setTrueOrFalse]
    }
}
