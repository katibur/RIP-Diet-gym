import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div className='header-section'>
            <img src={logo} alt="" />
            <h2>RIP Diet Gym</h2>
        </div>
    );
};

export default Header;