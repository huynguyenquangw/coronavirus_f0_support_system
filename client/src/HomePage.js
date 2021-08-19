import { Link } from 'react-router-dom';


export default function HomePage() {


    return (
        <div >
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

            <br />
            <div style={{ clear: 'left' }}>
                <div class="row">
                    <div class="col-sm-7">
                        <div style={{marginTop:'7em',marginLeft:'5em'}}>
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
                       <button type="button" class="btn btn-success" id='bt2'>Register as a patient</button>
                       </div>
                        </div>
                        
                    </div>
                    <div class="col-sm-5">
                  
                        <div  >
                            <img src="https://s3-alpha-sig.figma.com/img/ed04/e3c3/1a295381039121d559bf540562706d00?Expires=1630281600&Signature=Ge421Qo9e404gY13R76bpi-JH~0Z8TPfY20ebewnrrjHrJ7GcaLBb-lJcee32AZz~0FBFbCTbBC~FYfa-RM-uuSYNTIElIv5DU1Ub3DC0AbSEGbpS~fR8phuuH~HVYA8RsTddF9MchYXNyNAw71xyGRfITSzFU~1UsV5jEjkNTG8wesfo6YnBykP~Sq-WGiDANvgtt75X0vvvWwsTD-p2-FtxUU9kYsHF91P25RwQ~Gw2gcIk7cXqauAuoE3ApRdks9Vcwy~2DiJYPXLbKRApw8vrtEH~MXHbonR2ksAhlPAbUR7Q4KUbTxL4q6~j932G-9G6qfBTgf3Vyo~JhLmAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" style={{ width: '80%'}}  />
                        </div>
                        
                    </div>
                </div>

            </div>


        </div>

    )
}
