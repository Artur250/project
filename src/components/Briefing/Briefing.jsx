import React from 'react';
import './Briefing.css'
import img4 from '../../assets/Briefing.avif'
import img5 from '../../assets/briting.avif'


const Briefing = () => {
   
        return (
            <div>
                <div>
                <div className='Briefing'>
                <img className='img4' src={img4} alt="" />
                <p className='p1'> Briefing</p>
                <h2  className='p2'>Ron DeSantis has little chance of
                                  
                                    beating Donald Trump</h2>
                <p className='p3'>Hopes of depriving the former president of the Republican nomination
                                
                                     are fading</p>
                </div>

                    <div className='brit'>
                <div className='Britain'>
                <img className='img5' src={img5} alt="" />
                <p className='p4'>Britain</p>
                <h2 className='p5'>
                    British voters want more
                    <br />
                     immigrants but less
                    <br />
                     immigration
                </h2>
                
                <p className='p6'>The government’s immigration policy
                <br />
                 is incoherent because voters are
                 <br />
                     incoherent</p>
                </div>
                </div>

                <div className='economics'>
                    <p className='p7'>Finance & economics</p>
                    <h2 className='p8'>The American credit cycle
                    <br />
                                    is at a dangerous point</h2>
                    <p className='p9'>Welcome to a bad time for big debts</p>
                </div>


                <div className='brief'>
                    <br />  
                <h2>The world in brief</h2>
                <p><strong>Ron DeSantis’s</strong>
            <br />
            presidential-campaign launch
           <br />
            on Twitter was marred by technical glitches, delaying it by nearly half an hour, during which
            <br />
             hundreds of thousands of users tuned out of the audio broadcast...
                </p>
                <p><strong>Germany’s</strong>
                <br />
                economy 
                
                entered a recession
                <br />
                after contracting for a
                <br />
                 second consecutive quarter...
                </p>
                <p><strong>Volodymyr Zelensky</strong>
                <br />
                 Ukraine’s president, said that Russia launched
                 <br />
                  36 Iranian drones towards Ukraine
                  <br />
                   overnight...
                </p>
                <p>
                <strong>Britain </strong>
                <br />
                announced record net
                <br />  
                 migration figures, with 606,000 people
                 <br />
                  added to the country’s population in
                 <br />
                   2022...

                </p>
                <button className='btn1'>Continue reading </button>
                 </div>
                 </div>

                 <div className='shadow1'></div>
                 <div className='shadow2'></div>
                 <div className='shadow3'></div>
            </div>
        );
    
}

export default Briefing;
