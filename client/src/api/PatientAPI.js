import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PatientAPI(token) {

    const [admin, setAdmin] = useState(false)
    const [patient, setPatient] = useState(false)

    const [callback, setCallback] = useState(false)
    const [info, setInfo] = useState([])

    const getInfo = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user/info", {
                headers: {
                    Authorization: token
                }
            })
            setInfo(response.data)
            if (response.data.role === 1){
                setAdmin(true)
            }
            if (response.data.role === 0){
                setPatient(true)
            }
        } catch (error){
            alert(error.response.data.msg)
        }
        
    }

    useEffect(
        () => {
            if(token){
                getInfo()
            }
            
        }, [token, callback]
    )

    return {
        info: [info, setInfo],
        callback: [callback, setCallback],
        admin: [admin, setAdmin],
        patient: [patient, setPatient]
    }
}

export default PatientAPI


// import { useState } from "react"
// import { endPoint } from "./API"

// export var token = ""

// export var info = []

// export function Logout() {
//     return fetch(endPoint + '/user/logout')
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//         })
//         .then(localStorage.clear())
//         .then(info = "")
//         .then(token = "")
// }

// export function Login(email, password) {


    // const getrf = async () => {
    //     if(localStorage.getItem('isLogin') === true){
    //     return await fetch(endPoint + "/user/refresh_token", {
    //         credentials: 'include'
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //             token = data.accesstoken
    //         })
    //     }
    // }



//     return fetch(endPoint + "/user/login", {

//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             email: email,
//             password: password
//         }),
//         credentials: 'include'
//     }).then(res => res.json())
//         .then(console.log)
//         .then(getrf)
//         .catch(console.error)


// }

// export function GetPatientInfo() {
//     const [info, setInfo] = useState([])
//     return fetch(endPoint + "/user/info", {
//         method: 'GET',
//         headers: {
//             'Authorization': token,
//             'Content-Type': 'application/json'
//         }
//     }).then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//             info = data
//             console.log(info)
//         })
// }

// export function UpdatePatientInfo(data) {

//     return fetch(endPoint + "/user/update", {
//         method: 'PUT',
//         headers: {
//             "Authorization": token,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "name": data.name ? data.name : info.name,
//             "district": data.district ? data.district : info.district,
//             "phone": data.phone ? data.phone : info.phone,
//             "img": {
//                 "url": data.img?.url ? data.img?.url : info.img?.url,
//                 "public_id": data.img?.public_id ? data.img?.public_id : info.img?.public_id
//             }
//         })
//     })
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//         })
//         .then(GetPatientInfo())

// }

