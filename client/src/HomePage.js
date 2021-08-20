import Navbar from "./Navbar"

export default function HomePage() {


    return (
        <div >
            <Navbar/>

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
