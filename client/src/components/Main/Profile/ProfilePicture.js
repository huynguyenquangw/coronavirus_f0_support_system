import React,{ useState } from 'react'
import styled from 'styled-components'
import profile from '../../../assets/images/profile.svg'
import photoEdit from '../../../assets/icons/profile-picture-edit.svg'
import { ToastContainer, toast } from 'react-toastify';

const Container=styled.div`
    input{
        visibility: hidden;
    }
`

const PhotoContainer=styled.div`
    position: relative;
    box-sizing: border-box;
    max-width: 15rem;
    max-height: 15rem;
    height: 40vw;
    width: 40vw;
    border-radius: 15%;
`
const ActionContainer=styled.label`
`

const PhotoAction=styled.img`
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

    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const [publicId, setPublicId] = useState("");
    
    let data = new FormData()
    const endPoint = "http://localhost:3000/api"
    
    const uploadImage = (e) => {
        const file = e.target.files[0]
        
        let data = new FormData()
        data.append("file", file)

        fetch(endPoint + "/upload", {
            method: 'POST',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        setUrl(data.url)
        localStorage.setItem("userProfilePicture", data.url)
        setPublicId(data.public_id)

        })
        .catch(err => console.log(err))
    }    

    const deleteImage = () => {
        fetch(endPoint, {
            method: 'POST',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setUrl("")
        })
        .catch(err => console.log(err))

    }    

    
    let userProfilePicture = localStorage.getItem("userProfilePicture")
    let DisplayPhoto = ""
    if (userProfilePicture){
        DisplayPhoto = userProfilePicture
    }else{
        DisplayPhoto = profile
    }

    let PhotoCSS = {
        backgroundImage: 'url(' + DisplayPhoto + ')',
        backgroundSize: 'cover'
    };



    return (
        
        <Container>
            <PhotoContainer style={PhotoCSS}>
                <ActionContainer htmlFor="photo-upload">
                    <PhotoAction src={photoEdit}/>
                </ActionContainer>
            </PhotoContainer>
            
            <input 
            id="photo-upload" 
            type="file" 
            onChange= {uploadImage}></input>

        </Container>
    )    
}

export default ProfilePicture
