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

    const [ url, setUrl ] = useState("");
    const [publicId, setPublicId] = useState("");

    const endPoint = "http://localhost:3000/api"
    let userProfilePicture = localStorage.getItem("userProfilePicture")

    const editImage = (e) =>{
        if (localStorage.getItem("userProfilePicture")){
            let dataDelete = new FormData()
            dataDelete.append("public_id", userProfilePicture)

            fetch(endPoint + "/destroy", {
                method: 'POST',
                body: dataDelete
            })
            .then(resp => resp.json())
            .then(data => {
            
            })
            .catch(err => console.log(err))
            localStorage.removeItem("userProfilePicture")


        }   const file = e.target.files[0]
            
            let dataUpload = new FormData()
            dataUpload.append("file", file)
    
            fetch(endPoint + "/upload", {
                method: 'POST',
                body: dataUpload
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

    // const upload = (e) => {
    //     const file = e.target.files[0]

    //     axios.get(endPoint+"/upload", {
    //         body: {
    //             "file": file
    //         }
    //     })
    //         .then(response => {setUrl(response.url)})
    //         .catch(error => console.log(error));
    // }
  

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

    console.log(publicId)


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
            onChange= {editImage}></input>

        </Container>
    )    
}

export default ProfilePicture
