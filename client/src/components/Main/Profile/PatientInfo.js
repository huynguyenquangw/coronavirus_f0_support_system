import { useEffect, useState } from 'react';
import axios from 'axios';

const PatientInfo = {}

const PatientInfoFunction = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        getInfo()
    }, [])




    const getInfo = () => {
        if (localStorage.getItem("isLogin")) {
            console.log("dzo")
            axios.get("http://localhost:3000/user/info", {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
                .then(response => setInfo(response.data))
                .catch(error => console.log(error));
        }
    }



    PatientInfo.name = info.name
    PatientInfo.email = info.email
    PatientInfo.phone = info.phone
    PatientInfo.district = info.district?.name
    PatientInfo.city = info.district?.city.name
    PatientInfo.postcode = info.district?.city.postcode



}



export { PatientInfoFunction, PatientInfo }