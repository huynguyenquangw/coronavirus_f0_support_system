import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import certificate from '../../assets/images/certificate.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
import { toast } from 'react-toastify';
import axios from 'axios';

const Container = styled.div`
    input{
        visibility: hidden;
    }
`
const PhotoContainer = styled.img`
    position: relative;
    box-sizing: border-box;
    max-width: 15rem;
    max-height: 15rem;
    height: 40vw;
    border-radius: 15%;

    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 101% auto;
`

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

function Certificate({ doctorInfo, doctorToken, callbackDoctor, setCallbackDoctor }) {

    const [cloudinary, setCloudinary] = useState({
        url: "",
        public_id: ""
    })

    const endPoint = "http://localhost:3000"

    const editImage = async (e) => {
        e.preventDefault()

        if (cloudinary.url !== "") {
            //delete
            let dataDelete = new FormData()
            dataDelete.append("public_id", cloudinary.public_id)

            axios.post(endPoint + "/api/destroy", dataDelete)
                .then(response => {
                    console.log(response.data)
                    toast("Old certificate has been removed")
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
            toast("New certificate has been updated")
        } catch (error) {
            toast(error.response.data.msg)

        }

        // await axios.post(endPoint + "/api/upload", dataUpload)
        //     .then(response => {
        //         console.log(response.data)
        //         setCloudinary(response.data)
        //         console.log(cloudinary)

        //         setDisplay(cloudinary.url)
        //     })
        //     .catch(error => toast(error.request));

    }

    const updateImage = async (cloudinary) => {

        try {
            await fetch("http://localhost:3000/doctor/update", {
                method: 'PUT',
                headers: {
                    "Authorization": doctorToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "img": {
                        url: cloudinary.url,
                        public_id: cloudinary.public_id
                    },
                    "name": document.getElementById("name").value,
                    "district": {
                        "_id": document.getElementById("district").value,
                    },
                    "phone": document.getElementById("phone").value,
                    "experience": document.getElementById("experience").value,
                    certificate: doctorInfo.certificate,
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    toast(data.msg)
                })
                .then(setCallbackDoctor(!callbackDoctor))
        } catch (error) {
            toast(error.response)
        }
    }

    useEffect(() => {
        if (doctorInfo.img) {
            setCloudinary(doctorInfo.img)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <PhotoContainer style={{ backgroundImage: `url(${doctorInfo.img?.url || certificate})` }}>
                <ActionContainer htmlFor="photo-upload">
                    <PhotoAction src={photoEdit} />
                </ActionContainer>
            </PhotoContainer>

            <input id="photo-upload" type="file" onChange={editImage} />


        </Container>
    )
}

export default Certificate
