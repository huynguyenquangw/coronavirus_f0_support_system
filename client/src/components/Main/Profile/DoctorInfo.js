import { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorInfo = {}

const DoctorInfoFunction = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        getInfo()
    }, [])




    const getInfo = () => {
        if (localStorage.getItem("isLogin")) {
            axios.get("http://localhost:3000/user/info", {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
                .then(response => {
                    setInfo(response.data)

                })
                .catch(error => console.log(error));
        }
    }



    DoctorInfo.name = info.name
    DoctorInfo.email = info.email
    DoctorInfo.phone = info.phone
    DoctorInfo.district = info.district?.name
    DoctorInfo.city = info.district?.city.name
    DoctorInfo.postcode = info.district?.city.postcode



}



export { DoctorInfoFunction, DoctorInfo }