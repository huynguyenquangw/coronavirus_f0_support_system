import React, { Component, useState } from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
import { info, GetPatientInfo, UpdatePatientInfo } from '../../api/PatientAPI'
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

    var picture = info.img?.url ? info.img?.url : ""
    var publicId = info.img?.public_id ? info.img?.public_id : ""

    const [display, setDisplay] = useState(picture)

    const endPoint = "http://localhost:3000"

    const editImage = async (e) => {
        if (picture !== "") {
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

        await axios.post(endPoint + "/api/upload", dataUpload)
            .then(response => {
                console.log(response.data)
                console.log(response.data.url)
                console.log(response.data.public_id)
                picture = response.data.url
                publicId = response.data.public_id
                setDisplay(picture)
            })
            .catch(error => console.log(error.request));
        await updateImage()
    }

    const updateImage = async () => {

        const data = {
            "img":{
                "url": picture,
                "public_id": publicId
            }
            
        }

        await UpdatePatientInfo(data)
    }

    return (

        <Container>
            <PhotoContainer style={{ backgroundImage: `url(${display !== "" ? display : profile})` }}>
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
