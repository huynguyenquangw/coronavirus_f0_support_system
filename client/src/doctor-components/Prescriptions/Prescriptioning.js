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
    prescriptions: [],
    note: ""
}

function Prescriptioning() {
    const state = useContext(GlobalState)
    const [doctorToken] = state.doctorToken
    const [doctorInfo] = state.doctorAPI.doctorInfo
    const [patients] = state.getAllPatientAPI.patients
    const [limit, setLimit] = state.getAllPatientAPI.limit

    const [medicines, setMedicines] = useState([])

    const [prescriptionForm, setPrescriptionForm] = useState(initialState)
    const [prescriptionMedicine, setPrescriptionMedicine] = useState(medicineState)

    const handleChange = e => {
        const { name, value } = e.target
        setPrescriptionForm({ ...prescriptionForm, [name]: value })
    }

    const handleChangeMedicine = e => {
        const { name, value } = e.target
        setPrescriptionMedicine({ ...prescriptionMedicine, [name]: value })
    }

    const handleKeyUp = e => {
        e.preventDefault()
        if (e.key === "Enter") {
            const { medicine, frequency, quantity } = prescriptionMedicine
            if (medicine !== "" && frequency !== "" && quantity > 0) {
                addNewMedicine()
            }
        }
    }

    //get all medicines
    const getMedicine = async (e) => {
        try {
            const response = await axios.get("http://localhost:3000/medicine")
            setMedicines(response.data)
        } catch (error) {
            toast(error.response.data.msg)
        }
    }

    //add new medicine
    const addNewMedicine = () => {
        setPrescriptionForm({ ...prescriptionForm, prescriptions: [...prescriptionForm.prescriptions, prescriptionMedicine] })
        setPrescriptionMedicine(medicineState);
    }

    //save medicine form
    const saveMedicineForm = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/form', { ...prescriptionForm }, {
                headers: { Authorization: doctorToken }
            })
        } catch (error) {
            toast(error.response.data.msg)
        }
    }

    useEffect(() => {
        setLimit(9999999)
        setPrescriptionForm({ ...prescriptionForm, doctor_id: doctorInfo._id })
        getMedicine()
    }, [])


    console.log(prescriptionForm)

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

                    <div className='medincine-container'>
                        <div className="medicine-controller">
                            <select name="medicine" value={prescriptionMedicine.medicine} onChange={handleChangeMedicine}>
                                <option>Select Medicine</option>
                                {medicines.map(i =>
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                )}
                            </select>

                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity"
                                value={prescriptionMedicine.quantity}
                                onChange={handleChangeMedicine}
                                onKeyUp={handleKeyUp}
                            />

                            <label htmlFor="frequency">Dosage</label>
                            <input type="text" name="frequency"
                                value={prescriptionMedicine.frequency}
                                onChange={handleChangeMedicine}
                                onKeyUp={handleKeyUp}
                            />

                            <button onClick={addNewMedicine}>Add Medicine</button>
                        </div>

                        <div className="medicine-display">
                            {prescriptionForm.prescriptions.length > 0 && prescriptionForm.prescriptions.map(i => (
                                <>
                                    {medicines.filter(f => f._id === i.medicine).map(m => (
                                        <div>
                                            {m.name} - {m.type}
                                        </div>
                                    ))}
                                    -{i.quantity}-
                                    {i.frequency}
                                </>
                            ))}
                        </div>
                    </div>

                    <div className="medicine-note">
                        medicine note
                        <textarea name="note" id="note" onChange={handleChange}></textarea>
                    </div>
                </Form>
                <a className="button green " onClick={saveMedicineForm}>Save</a>
            </Row>
        </Container>
    )
}

export default Prescriptioning
