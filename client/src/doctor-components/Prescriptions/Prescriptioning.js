import axios from 'axios'
import React, { createElement, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Container, Row, Header } from '../../css-template/DashboardMain'
import { Container as Form, CheckboxField, TextAreaField, FieldBig } from "../../css-template/Input"
import { GlobalState } from '../../GlobalState'

const medicineState = {
    medicine: "",
    quantity: 0,
    frequency: ""
}

const initialState = {
    user_id: "",
    doctor_id: "",
    diagnostic: "",
    prescription: [],
    note: ""
}

function Prescriptioning() {
    const state = useContext(GlobalState)
    const [doctorInfo, setDoctorInfo] = state.doctorAPI.doctorInfo
    const [patients] = state.getAllPatientAPI.patients
    const [limit, setLimit] = state.getAllPatientAPI.limit

    const [medicines, setMedicines] = useState([])

    const [prescriptionForm, setPrescriptionForm] = useState(initialState)
    const [prescriptionMedicine, setPrescriptionMedicine] = useState(medicineState)

    const [renderNewMedicine, setRenderNewMedicine] = useState([])

    const [clearMedicine, setClearMedicine] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setPrescriptionForm({ ...prescriptionForm, [name]: value })
    }

    // const handleChangeMedicine = e => {
    // const { name, value } = e.target
    // setPrescriptionMedicine({ ...prescriptionMedicine, [name]: value })

    // }

    console.log(prescriptionForm.prescription)

    //get all medicines
    const getMedicine = async (e) => {

        try {
            const response = await axios.get("http://localhost:3000/medicine")
            setMedicines(response.data)
        } catch (error) {
            toast(error.response.data.msg)
        }
    }

    const addNewMedicine = () => {
        const newMedicine = (
            <div>
                <select name="medicine" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, medicine: e.target.value })}>
                    <option>Select Medicine</option>
                    {medicines.map(i =>
                        <option key={i._id} value={i._id}>{i.name}</option>
                    )}
                </select>

                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, quantity: e.target.value })} />

                <label htmlFor="frequency">Dosage</label>
                <input type="text" name="frequency" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, frequency: e.target.value })} />
                <div className="new-medicine"></div>
            </div>
        )
        setRenderNewMedicine([...renderNewMedicine, newMedicine])
        setClearMedicine(true)

        console.log(prescriptionMedicine)
    }



    useEffect(() => {
        setLimit(9999999)
        setPrescriptionForm({ ...prescriptionForm, doctor_id: doctorInfo._id })
        getMedicine()
    }, [])

    //push medicine into prescription
    useEffect(() => {
        const { medicine, quantity, frequency } = prescriptionMedicine
        let tempArray = []
        if (medicine !== "" && quantity > 0 && frequency !== "") {
            tempArray = prescriptionMedicine
            prescriptionForm.prescription.push(tempArray)
            tempArray = []
        }


    }, [prescriptionMedicine])



    return (
        <Container>
            <Row>
                <Header>New Prescription</Header>
                <Form>
                    <FieldBig style={{ flexBasis: "100%" }}>
                        <label htmlFor="user_id">Patient in {doctorInfo.district?.name}</label>
                        <select id="user_id" name="user_id" value={prescriptionForm.user_id} onChange={handleChange}>
                            <option>Select Patient</option>
                            {patients.filter(s => s.district?._id === doctorInfo.district?._id).map(i =>
                                <option key={i._id} value={i._id}>{i.name}</option>
                            )}
                        </select>
                    </FieldBig>
                    <TextAreaField>
                        <h2>Diagnostic</h2>
                        <textarea name="diagnostic" id="diagnostic" onChange={handleChange}></textarea>
                    </TextAreaField>
                    <div>
                        <select name="medicine" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, medicine: e.target.value })}>
                            <option>Select Medicine</option>
                            {medicines.map(i =>
                                <option key={i._id} value={i._id}>{i.name}</option>
                            )}
                        </select>

                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, quantity: e.target.value })} />

                        <label htmlFor="frequency">Dosage</label>
                        <input type="text" name="frequency" onChange={e => setPrescriptionMedicine({ ...prescriptionMedicine, frequency: e.target.value })} />

                        <div className="new-medicine">
                            {renderNewMedicine.map(i => (
                                <div>
                                    {i}
                                </div>
                            ))}
                        </div>

                    </div>

                    <button onClick={addNewMedicine}>Add Medicine</button>


                </Form>
                <a className="button green " on>Save</a>
            </Row>
        </Container>
    )
}

export default Prescriptioning
