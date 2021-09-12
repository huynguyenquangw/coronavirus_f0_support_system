import React, {useContext} from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import HomeAddress from './HomeAddress'
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { GlobalState } from '../../GlobalState';

function Profile(props) {
    const state = useContext(GlobalState)
    const [info, setInfo] = state.patientAPI.info
    const [token, setToken] = state.token
    const [callback, setCallback] = state.patientAPI.callback
    

    const updateInfo = async (e) => {
        e.preventDefault()

        try {
            await fetch("http://localhost:3000/user/update", {
                method: 'PUT',
                headers: {
                    "Authorization": token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": document.getElementById("name").value,
                    "district": {
                        "_id": document.getElementById("district").value,
                    },
                    "phone": document.getElementById("phone").value,
                    img: info.img
                })
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })
                .then(setCallback(!callback))
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <Container>
            <Row>
                <Header>PROFILE PICTURE</Header>
                <ProfilePicture info={info} token={token} callback={callback} setCallback={setCallback} />
            </Row>
            <Row>
                <Header>PERSONAL INFORMATION</Header>
                <PersonalInfo info={info} />
            </Row>
            <Row>
                <Header>HOME ADDRESS</Header>
                <HomeAddress info={info} />
            </Row>
            <Row>
                <a className="button green " onClick={updateInfo}>Save</a>
            </Row>
        </Container>
    )
}

export default Profile
