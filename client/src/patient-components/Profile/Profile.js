import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import HomeAddress from './HomeAddress'
import {Container, Row, Header} from '../../css-template/DashboardMain'

function Profile(props) {

    return (
        <Container>
            <Row>
                <Header>PROFILE PICTURE</Header>
                <ProfilePicture/>
            </Row>
            <Row>
                <Header>PERSONAL INFORMATION</Header>
                <PersonalInfo/>
            </Row>
            <Row>
                <Header>HOME ADDRESS</Header>
                <HomeAddress/>
            </Row>
        </Container>
    )
}

export default Profile
