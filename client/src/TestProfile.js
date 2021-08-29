import axios from 'axios';
import { useEffect } from 'react';

export default function TestProfile() {

    const endPoint = "http://localhost:3000"

    const refreshToken = async () =>{
        try {
            const  response =  axios.get(`http://localhost:3000/user/refresh_token`)
            await response
           console.log(response)
        } catch (error) {
            alert(error.response.data.msg)
        }
           
    }

    const getInfo = async () => {
        const response = await axios.get(`${endPoint}/user/info`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        console.log(response)
    }

    useEffect(() => {
        if(localStorage.getItem('isLogin')){
            refreshToken()
        }
        
        // getInfo()
    })



    return (
        <div>

            <p>this is test profile page</p>
        </div>
    )
}