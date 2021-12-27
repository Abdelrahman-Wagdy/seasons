import React from 'react';
const Navbar = () => {
    const toggleMenu = () =>{
        document.querySelector('.mainNav').style.top === '60px'?
        document.querySelector('.mainNav').style.top = `-1000px`:
        document.querySelector('.mainNav').style.top = '60px';
        document.querySelector('.Navbar').style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.7)';
        document.querySelector('.Navbar').style.backgroundColor ='rgb(8, 0, 119)';;
    }
    const menuTop = () =>{
        if (window.scrollY < 60) {
            document.querySelector('.Navbar').style.backgroundColor ='transparent';
            document.querySelector('.Navbar').style.boxShadow = 'none';
        }else{
            document.querySelector('.Navbar').style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.7)';
            document.querySelector('.Navbar').style.backgroundColor ='rgb(8, 0, 119)';
        }
    }
    window.addEventListener("scroll", menuTop);
    return ( 
        <div className="Navbar">
            <img src="seasons_logo.png" alt="Seasons Logo" />
            <i className="fas fa-bars menu-icon" onClick={toggleMenu}></i>
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