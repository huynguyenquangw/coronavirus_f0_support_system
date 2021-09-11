import { endPoint } from "./API"

export var token = ""

export var info = []

export function Logout() {
    return fetch(endPoint + '/user/logout')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        .then(localStorage.clear())
        .then(info.length = 0)
        .then(token = "")
        .then(console.log(token))
}

export function Login(email, password) {

    const getrf = async () => {
        return await fetch(endPoint + "/doctor/refresh_token", {
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                token = data.accesstoken
            })
    }

    return fetch(endPoint + "/doctor/login", {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        }),
        credentials: 'include'
    }).then(res => res.json())
        .then(console.log)
        .then(getrf)
        .catch(console.error)


}

export function GetPatientInfo() {
    return fetch(endPoint + "/user/info", {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            info = data
            console.log(info)
        })
}

export function UpdatePatientInfo(data) {

    return fetch(endPoint + "/user/update", {
        method: 'PUT',
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": data.name ? data.name : info.name,
            "district": data.district ? data.district : info.district,
            "phone": data.phone ? data.phone : info.phone,
            "img": {
                "url": data.img?.url ? data.img?.url : info.img?.url,
                "public_id": data.img?.public_id ? data.img?.public_id : info.img?.public_id
            }
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        .then(GetPatientInfo())

}

