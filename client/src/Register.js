import Navbar from './Navbar';
import {useEffect, useState } from 'react';
import { useHistory } from 'react-router'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
 
toast.configure()
 export default function Register(){
    const history = useHistory()
     const endPoint = "http://localhost:3000" 
     const [confirmPass, setConfirmPass] = useState('');

     const [user,setUser] = useState({
        name:'',
        email:'',
        password: '',
        district:'',
        phone:''
     })
      // chay Loading effect 
     const [loading,setLoading]=useState(false)
     const [district,setDistrict]=useState([])

     //On change for user
     const onChangeValue = e =>{
         const {name,value} = e.target
         setUser({...user,[name]:value})
     }

     const getDistrict = async e =>{
        try {
            const resp = await axios.get(`${endPoint}/district`)
            setDistrict(resp.data)
        } catch (error) {
            toast(error.response.data.msg)
        }

     }

     useEffect(()=>{
        getDistrict()
     })

     //Register check
     const registerSubmit = async e => {
         e.preventDefault()
         if(user.password !== confirmPass){
            toast('Password does not match !')
         }else{
            try {
            setLoading(true)
            await axios.post(endPoint+"/user/register",{...user})
            localStorage.setItem('isLogin',true)
            console.log(`User ${user.email} has been successfully registered !`)
            toast(`User ${user.email} has been successfully registered !`)
            
            setLoading(false)
            //Change url to profile page
            // setTimeout( window.location.replace('/'), 10000)
            history.push('/')
   

         } catch (error) {
             console.log(error.response.data.msg)
             toast(error.response.data.msg)
            setLoading(false)

         }  
         }
        
     }
     
 
 
    return (
        <div>
             <Navbar/>
            <div class='row'>
                <div class ='col-sm-3'>
                </div>
                {/* the form  */}
                <div class ='col-sm-6'>
                    <div class='reg1'>
                    Register a patient account
                    </div>
                    <div class='reg2'>
                         </div>
                         <br />
                    <div>
                        <form onSubmit={registerSubmit}>
                            <input type="text" class="no3" id="name" name="name" placeholder="Name.." value = {user.name} onChange = {onChangeValue} />
                            {/* <input type="text"  class="no2" id="lname" name="lastname" placeholder="Last name.." /> */}
                            <br />
                            <input type="text"  class="no1" id="phone" name="phone"  placeholder="Phone.." value = {user.phone} onChange = {onChangeValue} />
                            <input type="text"  class="no2" id="email" name="email"  placeholder="Email.."  value = {user.email} onChange = {onChangeValue}/>
                            <br />
                            {/* <input type="text"  class="no3" id="district" name="district"  placeholder="District.."value = {user.district} onChange = {onChangeValue} /> */}
                            <select name="district" id="district" class="no3" value = {user.district} onChange = {onChangeValue} >

                                {district.map(i=>
                                    <option value={i._id}>{i.name}</option>
                                    )}
                            </select>
                            <br />
                            <input type="text"  class="no3" id="password" name="password"  placeholder="Password.."value = {user.password} onChange = {onChangeValue} />
                            <br />
                            <input type="text"  class="no3" id="confirmPassword" name="confirmPassword"  placeholder="Confirm Password.."  value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
                            <br />
                            <input type="submit" value="Register"/>
                        </form>
                    </div>
                </div>

                <div class ='col-sm-3'>
                </div>
            </div>
        </div>
  
    )
 }
 