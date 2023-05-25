import React from 'react';
import './Data.css'
import img1 from '../../assets/The War.png'
import img2 from '../../assets/a-z.png'
import img3 from '../../assets/the_intelligence.png'
const Data = () => {
    
        return (
            <div>
                <div className='data'>
                    <img src={img1} alt="" />
                    <p className='p'>
                    The War Room
                    <br />
                    Sign up for our new newsletter covering defence
                    <br />
                    and international security

                    </p>
                    <img src={img2} alt="" />
                    <p className='p'> 
                    The A to Z of economics
                    <br />
                    Economic terms explained to you in plain English

                    </p>
                    <img src={img3} alt="" />
                    <p className='p'>
                    The Intelligence
                    <br />
                    Our daily podcast examines how Mexico’s drug
                    <br />
                     cartels are expanding
                    </p>
                </div>
            </div>
        )
    
}

export default Data;
