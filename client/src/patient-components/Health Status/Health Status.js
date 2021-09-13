
import { useState, useEffect } from 'react';
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { Container as Form, CheckboxField, TextAreaField } from "../../css-template/Input"

function HealthStatus(props) {
    const [health, setHealth] = useState({
        covid: false,
        vaccinated: false,
        fever: false,
        cough: false,
        breathing: false,
        sorethroat: false,
        phlegm: false,
        runnynose: false,
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
        "Blocked nose",
        "Smell loss",
        "Muscle Pain"
    ]

    const render = []
    const onChangeCheck = e => {
        const { name, checked } = e.target
        setHealth({ ...health, [name]: checked })
        console.log(e.target.name + "and" + checked)
    }

    const onChange = e => {
        setHealth({ ...health, othersymptoms: e.target.value })
        console.log(health.othersymptoms)
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

    const updateHealthDeclaration = () =>{
        console.log(health)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Header>Your Health Status</Header>
                    <Form>
                        {render}
                        <TextAreaField>
                        <h2>Other Symptoms</h2>
                        <textarea name="other" id="other" onChange={onChange}>

                        </textarea>
                        </TextAreaField>
                    </Form>
                </Row>
                <Row>
                <a className="button green " onClick={updateHealthDeclaration}>Save</a>
            </Row>
            </Container>
        </div>
    )
}
export default HealthStatus
