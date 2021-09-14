
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { Container as Form, CheckboxField, TextAreaField, FieldBig } from "../../css-template/Input"
import { GlobalState } from '../../GlobalState';
import {toast } from 'react-toastify';

function HealthStatus(props) {
    const state = useContext(GlobalState)
    const [info, setInfo] = state.patientAPI.info
    const [token] = state.token
    const [data, setData] = state.getAllDoctorAPI.doctors
    const [limit, setLimit] = state.getAllDoctorAPI.limit

    const [selectedDoctor, setSelectedDoctor] = useState("")

    useEffect(() => {
        setLimit(9999999)
    }, [])

    const [health, setHealth] = useState({
        covid: false,
        vaccinated: false,
        fever: false,
        cough: false,
        breathing: false,
        sorethroat: false,
        phlegm: false,
        runnynose: false,
        tiredness: false,
        blocknose: false,
        losssmell: false,
        musclepain: false,
        othersymptoms: ''
    })
    const headings = [
        "Tested positive",
        "Vaccinated",
        "Fever",
        "Cough",
        "Breathing difficulties",
        "Sorethroat",
        "Phlegm",
        "Runny nose",
        "Tiredness",
        "Blocked nose",
        "Smell loss",
        "Muscle Pain"
    ]

    const render = []

    const onChangeCheck = e => {
        const { name, checked } = e.target
        setHealth({ ...health, [name]: checked })
    }

    const onChange = e => {
        setHealth({ ...health, othersymptoms: e.target.value })
    }

    const onChangeDoctor = e => {
        setSelectedDoctor(e.target.value)
        console.log(selectedDoctor)
    }

    const keys = Object.keys(health)
    var i = 0
    for (var e = 0; e < keys.length - 1; e++) {
        render.push(
            <CheckboxField>
                <h2>{headings[i]}</h2>
                <input name={[keys[e]]} id={[keys[e]]} type="checkbox"
                    checked={health[keys[e]]} onChange={onChangeCheck}></input>
            </CheckboxField>
        )
        i += 1
    }

    const updateHealthDeclaration = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:3000/health/add",{
                ...health,
                user_id: info._id,
                doctor_id: selectedDoctor
            },{
                headers:{
                    Authorization: token
                },
            })

            console.log(response)
            // await fetch("http://localhost:3000/health/add", {
            //     method: 'POST',
            //     headers: {
            //         "Authorization": token,
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         "name": document.getElementById("name").value,
            //         "district": {
            //             "_id": document.getElementById("district").value,
            //         },
            //         "phone": document.getElementById("phone").value,
            //         img: info.img
            //     })
            // })
            //     .then(resp => resp.json())
            //     .then(data => {
            //        toast(data.msg)
            //     })
            //     .then(setCallback(!callback))
        } catch (error) {
            toast(error.response.data.msg)
        }
    }



    useEffect(()=>{
        const doctorOption = document.querySelectorAll(".doctor-option")
        if (doctorOption.length>0){
            setSelectedDoctor(doctorOption[0].value)
        }
        // for (let index = 0; index < doctorOption.length; index++) {
        //     if(index == 0){
                // setSelectedDoctor(doctorOption[0].value)
        //     }
        // }
        
    })

    return (
        <div>
            <Container>
                <Row>
                    <Header>Your Health Status</Header>
                    <Form>
                        <FieldBig style={{ flexBasis: "100%" }}>
                            <label htmlFor="doctor">Doctor in {info.district.name}</label>
                            <select id="doctor" value={selectedDoctor} onChange={onChangeDoctor}>
                                {data.map(i =>
                                    i.district?._id == info.district?._id ?
                                        <option className="doctor-option" value={i._id}>{i.name}</option> : ""
                                )}
                            </select>
                        </FieldBig>
                        {render}
                        <TextAreaField>
                            <h2>Other Symptoms</h2>
                            <textarea name="other" id="other" onChange={onChange}>

                            </textarea>
                        </TextAreaField>
                    </Form>
                    <a className="button green " onClick={updateHealthDeclaration}>Save</a>
                </Row>
            </Container>
        </div>
    )
}
export default HealthStatus
