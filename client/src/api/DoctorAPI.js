import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DoctorAPI(doctorToken) {

    const [doctor, setDoctor] = useState(false)

    const [callbackDoctor, setCallbackDoctor] = useState(false)
    const [doctorInfo, setDoctorInfo] = useState([])

    const getDoctorInfo = async () => {
        try {
            const response = await axios.get("http://localhost:3000/doctor/info", {
                headers: {
                    Authorization: doctorToken
                }
            })
            console.log(response.data)
            setDoctorInfo(response.data)
            setDoctor(true)            
        } catch (error) {
            alert(error.response.data.msg)
        }

    }

    useEffect(
        () => {
            if (doctorToken) {
                getDoctorInfo()
            }

        }, [doctorToken, callbackDoctor]
    )

    return {
        doctorInfo: [doctorInfo, setDoctorInfo],
        callbackDoctor: [callbackDoctor, setCallbackDoctor],
        doctor: [doctor, setDoctor]
    }
}

export default DoctorAPI