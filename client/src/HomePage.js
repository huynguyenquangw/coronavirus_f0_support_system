import Navbar from "./Navbar"
import DoctorPhoto from './assets/images/doctor.png'
import styled from "styled-components"

export default function HomePage() {


    return (
        <div >
            <Navbar />
            <div class="grid-container">
                <div class="item1">
                    <div style={{ marginTop: 7 + 'em', marginLeft: 5 + 'em' }}>
                        <div class='hp1'>
                            <b>Signs of COVID ?</b>
                        </div>
                        <div class='hp2'>
                            Get direct doctor support and prescriptions
                            delivered right from home
                        </div>
                        <div class='hp3'>
                            Register an account, logged your symptoms and let one of our
                            professional doctors in your area take care of you.
                        </div>
                        <br />
                        <div>
                            <button type="button" class="registerButton2" >Register as a patient</button>
                        </div>
                    </div>

                </div>
                <div class="item2">
                    <img src={DoctorPhoto} alt="" style={{ width: '80%' }} />
                </div>

            </div>
        </div>

    )
}
