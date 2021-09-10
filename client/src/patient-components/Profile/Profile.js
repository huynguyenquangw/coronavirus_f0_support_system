import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import HomeAddress from './HomeAddress'
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { UpdatePatientInfo } from '../../api/PatientAPI'

function Profile(props) {



    const updateInfo = async () => {
        const data = {
            "name": document.getElementById("name").value,
            "district": {
                "_id": document.getElementById("district").value,
            },
            "phone": document.getElementById("phone").value,
        }

        console.log(data)

        await UpdatePatientInfo(data)
    }

    return (
        <Container>
            <Row>
                <Header>PROFILE PICTURE</Header>
                <ProfilePicture />
            </Row>
            <Row>
                <Header>PERSONAL INFORMATION</Header>
                <PersonalInfo />
            </Row>
            <Row>
                <Header>HOME ADDRESS</Header>
                <HomeAddress />
            </Row>
            <Row>
                <a className="button green " onClick={updateInfo}>Save</a>
            </Row>
        </Container>
    )
}

export default Profile
