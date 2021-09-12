import React, { Component, useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
// import { info, GetPatientInfo, UpdatePatientInfo } from '../../api/PatientAPI'
import axios from 'axios';




const Container = styled.div`
    input{
        visibility: hidden;
    }
`

const PhotoContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 15rem;
    max-height: 15rem;
    height: 40vw;
    width: 40vw;
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
function ProfilePicture({ info, token, callback, setCallback }) {    

    const [cloudinary, setCloudinary] = useState({
        url:  "",
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
                })
                .catch(error => console.log(error.request));
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
        } catch (error) {
            console(error.response.data.msg)
        }
        
        // await axios.post(endPoint + "/api/upload", dataUpload)
        //     .then(response => {
        //         console.log(response.data)
        //         setCloudinary(response.data)
        //         console.log(cloudinary)

        //         setDisplay(cloudinary.url)
        //     })
        //     .catch(error => console.log(error.request));

    }
    
    const updateImage = async (cloudinary) => {

        try {
            await fetch("http://localhost:3000/user/update", {
                method: 'PUT',
                headers: {
                    "Authorization": token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": "Huy",
                    "img": {
                        url: cloudinary.url,
                        public_id: cloudinary.public_id
                    },
                    "district": "6125506d73f4275ea38c9b9f",
                    "phone": "0123456789"
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
                .then(setCallback(!callback))
        } catch (error) {
            console.log(error.response)
        }


    }

    

    useEffect(() => {
        if (info.img) {
            setCloudinary(info.img)
        }
    },[])

    return (

        <Container>
            <PhotoContainer style={{ backgroundImage: `url(${info.img?.url !== "" ? info.img?.url : profile})` }}>
                <ActionContainer htmlFor="photo-upload">
                    <PhotoAction src={photoEdit} />
                </ActionContainer>
            </PhotoContainer>

            <input
                id="photo-upload"
                type="file"
                onChange={editImage}></input>


        </Container>
    )
}

export default ProfilePicture
