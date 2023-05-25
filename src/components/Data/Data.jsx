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
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        )
    
}

export default Data;
