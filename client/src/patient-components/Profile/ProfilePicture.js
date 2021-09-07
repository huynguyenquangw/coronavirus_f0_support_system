import React, { Component, useState } from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
import { info } from '../../api/PatientAPI'
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
function ProfilePicture() {
    const [picture, setPicture] = info.img?.url ? info.img?.url : "";
    const [url, setUrl] = useState("");
    const [publicId, setPublicId] = useState("");

    const endPoint = "http://localhost:3000"

    const editImage = (e) => {
        if (picture) {

            //delete
            let dataDelete = new FormData()
            dataDelete.append("public_id", publicId)

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

        axios.post(endPoint + "/api/upload", dataUpload)
            .then(response => {
                console.log(response.data)
                // window.location.reload()
                setUrl(response.data.url)
                setPublicId(response.data.public_id)
                setPicture(response.data.url)
                PhotoContainer.forceUpdate()
            })
            .catch(error => console.log(error.request));

    }

    const updateImage = () => {

        fetch(endPoint + "/user/update", {
            method: 'PUT',
            headers: {
                "Authorization": localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": "Huy",
                "email": "entaimagi@gmail.com",
                "district": "6125505773f4275ea38c9b81",
                "phone": "1234567890",
                "img": {
                    "url": url,
                    "public_id": publicId
                }
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <Container>
            <PhotoContainer style={{ backgroundImage: `url(${picture ? picture : profile})` }}>
                <ActionContainer htmlFor="photo-upload">
                    <PhotoAction src={photoEdit} />
                </ActionContainer>
            </PhotoContainer>
        
            <input
                id="photo-upload"
                type="file"
                onChange={editImage}></input>
                
            <button onClick={updateImage}>Update</button>

        </Container>
    )
}

export default ProfilePicture
