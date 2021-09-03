import { useEffect, useState } from 'react';
import axios from 'axios';

const PatientInfo = {
    name: '',
    phone: '',
    district: '',
    email: '',
    city: '',
    postcode: '',
    img: ''
}

const GetPatientInfo = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = () => {
        axios.get("http://localhost:3000/user/info", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log(response)
                setInfo(response.data)
            })
            .catch(error => console.log(error));
    }

    PatientInfo.name = info.name
    PatientInfo.email = info.email
    PatientInfo.phone = info.phone
    PatientInfo.district = info.district?.name
    PatientInfo.city = info.district?.city?.name
    PatientInfo.postcode = info.district?.city?.postcode
    PatientInfo.img = info.img

    console.log(PatientInfo)

}

const UpdatePatientInfo = (e) => {
    useEffect(() => {
        updateInfo()
    }, [])

    const updateInfo = () => {
        fetch("http://localhost:3000/user/update", {
            method: 'PUT',
            headers: {
                "Authorization": localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "name": "Huy",
                "email": "entaimagi@gmail.com",
                "district": "6125505773f4275ea38c9b81",
                "phone": "1234567890",
                "img": {
                  "url": "https://res.cloudinary.com/lwk/image/upload/v1630578984/lwk/nxkfwggukje3hahoacln.jpg",
                  "public_id": "lwk/nxkfwggukje3hahoacln"
                }
              })
        })
    }
}


export { GetPatientInfo, PatientInfo }