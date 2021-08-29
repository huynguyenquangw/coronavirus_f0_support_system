import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TestProfile() {
    const [info,setInfo] = useState([])

    const endPoint = "http://localhost:3000"


    const getInfo = async () => {
        const response = await axios.get(`${endPoint}/user/info`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }) 
        console.log(response.data )
        setInfo(response.data)

    }

    useEffect(() => {        
        getInfo()
        
    },[])

    console.log(info)
    

    return (
        <div>

            <p>this is test profile page</p>
            {info.name} <br />
            {info.email}
        </div>
    )
}