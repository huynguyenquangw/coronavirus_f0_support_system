import React, { useState } from 'react'
import styled from 'styled-components'
import profile from '../../assets/images/profile.svg'
import photoEdit from '../../assets/icons/profile-picture-edit.svg'
import { ToastContainer, toast } from 'react-toastify';
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

    const [url, setUrl] = useState("");
    const [publicId, setPublicId] = useState("");

    const endPoint = "http://localhost:3000"
    let userProfilePicture = localStorage.getItem("userProfilePicture")

    const editImage = (e) => {
        if (localStorage.getItem("userProfilePicture")) {

            // //destroy
            // let dataDelete = new FormData()
            // dataDelete.append("public_id", userProfilePicture)

            // fetch(endPoint + "/api/destroy", {
            //     method: 'POST',
            //     body: dataDelete
            // })
            //     .then(resp => resp.json())
            //     .then(data => {
            //         console.log(data)
            //     })
            //     .catch(err => console.log(err))
            // localStorage.removeItem("userProfilePicture")
            //delete
            let dataDelete = new FormData()
            dataDelete.append("public_id", userProfilePicture)

            axios.post(endPoint + "/api/destroy", dataDelete)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => toast(error.request));
                localStorage.removeItem("userProfilePicture")
        }

        //upload
        const file = e.target.files[0]
        let dataUpload = new FormData()
        dataUpload.append("file", file)

        axios.post(endPoint + "/api/upload", dataUpload)
            .then(response => {
                console.log(response.data)
                setUrl(response.data.url)
                localStorage.setItem("userProfilePicture", response.data.url)
            })
            .catch(error => toast(error.request));

    }

    const updateImage = () => {
        let imgData = new FormData()
        imgData.append("url", url)
        imgData.append("public_id", publicId)


        axios.post(endPoint + "/api/upload", imgData)
            .then(response => {
                console.log(response.data)
                window.location.reload()
                setUrl(response.data.url)
                localStorage.setItem("userProfilePicture", response.data.url)
            })
            .catch(error => toast(error.request));


        fetch(endPoint + "/user/update", {
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
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    let DisplayPhoto = ""

    if (userProfilePicture) {
        DisplayPhoto = userProfilePicture
    } else {
        DisplayPhoto = profile
    }

    let PhotoCSS = {
        backgroundImage: 'url(' + DisplayPhoto + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: '101% auto'
    };

    console.log(publicId)


    return (

        <Container>
            <PhotoContainer style={PhotoCSS}>
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
