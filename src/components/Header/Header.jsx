import React from 'react';
import { Link } from 'react-router-dom' 
import "./Header.css"

const Header = () => {
 
        return (
            <div>
                  <div className="background-logo"> 
                <a href='/' className='logo'></a> 
            </div> 
            <div className='container'> 
                <a className="logo_company"> 
                
                </a> 
                <div className="nav"> 
                    <Link to='/logo' className='Link'>The
                                                    <br />
                                                Economist
                    </Link> 
                    <Link to='/menu' className='Link'>Menu </Link> 
                    <Link to='/weekly' className='Link'>Weekly edition</Link> 
                    <Link to='/world' className='Link'>The world in brief</Link> 
                    <Link to='/search' className='login'><input type="text" /></Link> 
                </div> 
            </div> 
            </div>
        );
    
}

export default Header;
