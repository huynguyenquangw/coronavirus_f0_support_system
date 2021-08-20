import Navbar from "./Navbar"

export default function Login(){
    
 
    return (
        <div>
           <Navbar/>
            <div class='row'>
                <div class ='col-sm-3'>
                </div>
                {/* the form  */}
                <div class ='col-sm-6'>
                    <div class='reg1'>
                    Login as a patient account
                    </div>
                    <div class='reg2'>
                         </div>
                         <br />
                    <div>
                        <form action="">
                            <input type="text"  class="no3" id="email" name="enail"  placeholder="Email.." />
                            <br />
                            <input type="text"  class="no3" id="password" name="password"  placeholder="Password.." />
                            <br />
                            <input type="submit" value="Log In"/>
                        </form>
                    </div>
                </div>

                <div class ='col-sm-3'>
                </div>
            </div>
        </div>
  
    )
 }