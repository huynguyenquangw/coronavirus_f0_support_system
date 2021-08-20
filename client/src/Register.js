import Navbar from './Navbar';
 
 export default function Register(){
 
 
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
                        <form action="">
                            <input type="text" class="no1" id="fname" name="firstname" placeholder="First name.." />
                            <input type="text"  class="no2" id="lname" name="lastname" placeholder="Last name.." />
                            <br />
                            <input type="text"  class="no1" id="phone" name="phone"  placeholder="Phone.." />
                            <input type="text"  class="no2" id="email" name="enail"  placeholder="Email.." />
                            <br />
                            <input type="text"  class="no1" id="district" name="district"  placeholder="District.." />
                            <input type="text"  class="no2" id="city" name="city"  placeholder="City.." />
                            <br />
                            <input type="text"  class="no3" id="password" name="password"  placeholder="Password.." />
                            <br />
                            <input type="text"  class="no3" id="confirmPassword" name="confirmPassword"  placeholder="Confirm Password.." />
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
 