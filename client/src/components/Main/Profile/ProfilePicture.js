import React,{ useState } from 'react'
import styled from 'styled-components'
import profile from '../../../assets/images/profile.svg'
import photoEdit from '../../../assets/icons/profile-picture-edit.svg'

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
    const endPoint = "http://localhost:3000/api/destroy"
    
    const uploadImage = () => {
        data.append(endPoint, image)
        fetch("http://localhost:3000/api/upload", {
            method: 'POST',
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
        setUrl(data.url)
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

    let DisplayPhoto = (url == "" ? profile : url )

    let PhotoCSS = {
        background: 'url(' + DisplayPhoto + ')',
        backgroundSize: 'cover' ,
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
            onChange= {e=> {setImage(e.target.files[0]);uploadImage();
            }}></input>
        </Container>
    )    
}

export default ProfilePicture
