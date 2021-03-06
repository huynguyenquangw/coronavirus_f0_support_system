import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
import { toast } from 'react-toastify';
import axios from 'axios';

const ActionContainer = styled.label`
`

const PhotoAction = styled.img`
    display: inline-block;
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.5rem;
    cursor: pointer;
    transition: width 0.2s;

    :hover{
        width: 3rem;
    }
`
function ProfilePicture({ doctorInfo, doctorToken, callbackDoctor, setCallbackDoctor, setLoading }) {
    const [cloudinary, setCloudinary] = useState({
        url: "",
        public_id: ""
    })

    const endPoint = "http://localhost:3000"

    const editImage = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (cloudinary.url !== "") {
            //delete
            let dataDelete = new FormData()
            dataDelete.append("public_id", cloudinary.public_id)

            axios.post(endPoint + "/api/destroy", dataDelete)
                .then(response => {
                    console.log(response.data)
                    toast("Old profile picture has been removed")
                })
                .catch(error => toast(error.request));
        }

        //upload
        const file = e.target.files[0]
        let dataUpload = new FormData()
        dataUpload.append("file", file)

        try {
            const response = await axios.post(endPoint + "/api/upload", dataUpload)
            console.log(response.data)
            setCloudinary(response.data)
            updateImage(response.data)
            toast("New profile picture has been updated")
        } catch (error) {
            toast(error.response.data.msg)

        }
        setLoading(false)
    }

    const updateImage = async (cloudinary) => {

        // try {
        await fetch("http://localhost:3000/doctor/update/img", {
            method: 'PUT',
            headers: {
                "Authorization": doctorToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "img": {
                    url: cloudinary.url,
                    public_id: cloudinary.public_id
                }
            })
        })
            .then(resp => resp.json())
            .then(data => {
                toast(data.msg)
            })
            .then(setCallbackDoctor(!callbackDoctor))
        // } catch (error) {
        //     toast(error.response)
        // }
    }

    useEffect(() => {
        if (doctorInfo.img) {
            setCloudinary(doctorInfo.img)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="dashboardmain-container">
            <div className="profilepicture-container" style={{ backgroundImage: `url(${doctorInfo.img?.url || profile})` }}>
                <ActionContainer htmlFor="photo-upload">
                    <PhotoAction src={photoEdit} />
                </ActionContainer>
            </div>

            <input id="photo-upload" type="file" onChange={editImage} />
        </div>
    )
}

export default ProfilePicture
