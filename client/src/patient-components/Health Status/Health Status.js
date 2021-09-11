import React from 'react'
import styled from 'styled-components'

function DoctorChat(props) {
    return (
        <div>
            <h1 style={{fontSize: "10em"}}>DoctorChat</h1>
        </div>
    )
}

export default DoctorChat


// import { heading } from 'npmlog';
// import { useState, useEffect } from 'react';
// import { Container, Row, Header } from '../../css-template/DashboardMain'
// import { Container as Form, CheckboxField } from "../../css-template/Input"

// function HealthStatus(props) {

//     const [health, setHealth] = useState({
//         covid: false,
//         vaccinated: false,
//         fever: false,
//         cough: false,
//         breathing: false,
//         sorethroat: false,
//         phlegm: false,
//         runnynose: false,
//         blocknose: false,
//         losssmell: false,
//         musclepain: false,
//         othersymptoms: ''
//     })

//     const headings = [
//         "Tested positive",
//         "Vaccinated",
//         "Fever",
//         "Cough",
//         "Breathing difficulties",
//         "Sorethroat",
//         "Phlegm",
//         "Runny nose",
//         "Blocked nose",
//         "Smell loss",
//         "Muscle Pain",
//         "Other symptoms"
//     ]
    
//     const render = []

//     const onChangeCheck = e => {
//         const { name, checked } = e.target
//         setHealth({ ...health, [name]: checked })
//     }

//     // const i = 0

//     // useEffect(() => {
        
//     //     for (var a in health) {
//     //         // render.push(
//     //         //     <CheckboxField>
//     //         //         <h2>{headings[i]}</h2>
//     //         //         <input name={health[a]} id={health[a]} type="checkbox"
//     //         //             checked={a} onChange={onChangeCheck}></input>
//     //         //     </CheckboxField>
//     //         // )
//     //         // i++
//     //         i++
//     //     }
//     // }, [])

//     // console.log(render)

//     return (
//         <div>
//             <Container>
//                 <Row>
//                     <Header>Your Health Status</Header>
//                     <Form>
//                         <CheckboxField>
//                             <h2></h2>
//                             <input name="fever" id="fever" type="checkbox"
//                                 checked={health.covid} onChange={onChangeCheck}></input>
//                         </CheckboxField>

//                         <CheckboxField>
//                             <h2>Vaccinated</h2>
//                             <input name="vaccinated" id="vaccinated" type="checkbox"
//                                 checked={health.vaccinated} onChange={onChangeCheck}></input>
//                         </CheckboxField>

//                         <CheckboxField>
//                             <h2>Fever</h2>
//                             <input name="vaccinated" id="vaccinated" type="checkbox"
//                                 checked={health.vaccinated} onChange={onChangeCheck}></input>
//                         </CheckboxField>

//                     </Form>
//                 </Row>
//             </Container>
//         </div>
//     )
// }

// export default HealthStatus
