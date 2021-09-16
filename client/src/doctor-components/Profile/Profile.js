import React, { useContext } from 'react'
import ProfilePicture from './ProfilePicture'
import Certificate from './Certificate'
import PersonalInfo from './PersonalInfo'
import Location from './Location'
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { GlobalState } from '../../GlobalState'
import { toast } from 'react-toastify';


function Profile(props) {
    const state = useContext(GlobalState)
    const [doctorInfo, setDoctorInfo] = state.doctorAPI.doctorInfo
    const [doctorToken, setDoctorToken] = state.doctorToken
    const [callbackDoctor, setCallbackDoctor] = state.doctorAPI.callbackDoctor

    const updateInfo = async (e) => {
        e.preventDefault()

        // try {
        await fetch("http://localhost:3000/doctor/update", {
            method: 'PUT',
            headers: {
                "Authorization": doctorToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": document.getElementById("name").value,
                "district": {
                    "_id": document.getElementById("district").value,
                },
                "phone": document.getElementById("phone").value,
                "experience": "sddfdddddd",
                certificate: { blank: "" },
                img: { blank: "" }

            })
        })
            .then(resp => resp.json())
            .then(data => {
                toast(data.msg)
            })
            .then(setCallbackDoctor(!callbackDoctor))
        // } catch (error) {
        //     toast(error.response.data.msg)
        // }
    }

    return (
        <Container>
            <Row>
                <Header>PROFILE PICTURE</Header>
                <ProfilePicture doctorInfo={doctorInfo} doctorToken={doctorToken} callbackDoctor={callbackDoctor} setCallbackDoctor={setCallbackDoctor} />
            </Row>
            <Row>
                <Header>PERSONAL INFORMATION</Header>
                <PersonalInfo doctorInfo={doctorInfo} />
            </Row>
            {/* <Row>
                <Header>CERTIFICATE</Header>
                <Certificate doctorInfo={doctorInfo} doctorToken={doctorToken} callbackDoctor={callbackDoctor} setCallbackDoctor={setCallbackDoctor}/>
            </Row> */}
            <Row>
                <Header>ASSIGNED LOCATION</Header>
                <Location doctorInfo={doctorInfo} />
            </Row>
            <Row>
                <a className="button green " onClick={updateInfo}>Save</a>
            </Row>
        </Container>
    )
}

export default Profile
