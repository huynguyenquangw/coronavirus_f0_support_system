import { Link } from 'react-router-dom';

export default function Login(){
    
 
    return (
        <div>
            <nav class='navbar'>
                <div class='nav-item' style={{ width: '30%' }}  >
                    <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.15752-9/238772497_359385662331792_1403346481542208340_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=1KfK8urjtSEAX8VMPV8&_nc_ht=scontent.fsgn2-3.fna&oh=cecf9cfcda87016d8e75c416e1f51979&oe=6142AF44" alt="logo.jpg" style={{ width: '60%' }} />
                </div>

                <div class='nav-item' >
                    Home

                </div>

                <div class='nav-item' >
                    How It Works
                </div>

                <div class='nav-item' >
                    Contact Us
                </div>

                <div id='right' class='nav-item' >
                    <Link to="/login" style={{ paddingRight: '20px', paddingLeft: '11em' }} >
                        <button type="button" class="btn btn-primary" id="bt1">Login</button>
                    </Link>
                    <Link to="/register" style={{ paddingRight: '30px' }}>
                        <button type="button" class="btn btn-success" >Register</button>
                    </Link>
                </div>

            </nav>
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