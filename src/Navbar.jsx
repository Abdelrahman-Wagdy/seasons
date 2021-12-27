import React from 'react';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <img src="seasons_logo.png" alt="Seasons Logo" />
            <nav className='mainNav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
}
 
export default Navbar;