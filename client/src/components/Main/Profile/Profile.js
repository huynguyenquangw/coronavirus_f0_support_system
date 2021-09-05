import React from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'
import PersonalInfo from './PersonalInfo'
import HomeAddress from './HomeAddress'
import Certificate from './Certificate'

function Profile(props) {

const Container=styled.div`
    width: 100%;
`
const Row=styled.div`
    display: block;
    width: 100%;
    margin-bottom: 3rem;

    *{
        margin-bottom: 0.8rem;
    }

`

const Header=styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #00A473;
    width: 100%;
    text-align: left;
    padding: 1rem 0;
    margin-bottom: 2rem;
`

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
                <Header>Certificate</Header>
                <Certificate/>
            </Row>
            <Row>
                <Header>HOME ADDRESS</Header>
                <HomeAddress/>
            </Row>
        </Container>
    )
}

export default Profile
