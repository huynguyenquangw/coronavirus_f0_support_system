import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Pharmacies(props) {
    const endPoint = "http://localhost:3000"
    const [data, setData] = useState([]);

    // const [pharmacy, setPharmacy] = useState({
    //     brand: '',
    //     district: '',
    //     availability: '',
    //     city: '',
    //     image: ''
    // })

    // //On change for pharmacy
    // const onChangeValue = e => {
    //     const { name, value } = e.target
    //     setPharmacy({ ...pharmacy, [name]: value })
    // }

    // const registerPharmacy = async e => {
    //     try {
    //         axios.post(`${endPoint}/pharmacy/add`, { ...pharmacy }, {
    //             headers: {
    //                 "Authorization": localStorage.getItem("token")
    //             }
    //         })
    //         toast("Pharmacy added successfully !")
    //         load()
    //     } catch (error) {
    //         toast(error.response.data.msg)
    //     }
    // }

    const load = () => {
        fetch(endPoint + "/pharmacy?limit=999999999")
            .then(response => response.json())
            .then(item => setData(item.data));
    }
    

    //load data automatically
    useEffect(() => {
        load()
    }, [])

    return (
        <div>
            {/* <div>
            <h2 class="list"> Pharmacy Register</h2>
            <form onSubmit={registerPharmacy}>
                            <input type="text" className="no3" id="brand" name="brand" placeholder="Brand.." value={pharmacy.brand} onChange={onChangeValue} />
                            <br />
                            <input type="text" className="no3" id="city" name="city" placeholder="City.." value={pharmacy.city} onChange={onChangeValue} />
                            <br />
                            <input type="text" className="no3" id="district" name="district" placeholder="District.." value={pharmacy.district} onChange={onChangeValue} />
                            <br />
                            <input type="boolean" className="no3" id="availability" name="availability" placeholder="Availability.." value={pharmacy.availability} onChange={onChangeValue} />
                            <br />
                            <input type="submit" value="Register" className="button green" />
                        </form>
            </div> */}
         <h2 class="list"> Pharmacy List</h2>
            <div >
                <table style={{ width: "100%" }}>
                    <tr>
                        <th>Brand</th>
                        <th>District</th>
                        <th>City</th>
                        <th>Availabilty</th>
                        <th>Image</th>


                    </tr>
                    {data.map(i => (
                        <tr>
                            <td>{i.brand}</td>
                            <td>{i.district}</td>
                            <td>{i.city}</td>
                            <td>{i.availability?"Yes":"No"}</td>
                            <td>{i.image}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}

export default Pharmacies
