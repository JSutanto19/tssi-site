// import { Link } from 'react-router-dom';
import '/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Navbar.css';
import React, { useState, useEffect } from 'react';


const Navbar = () => {
  // State to track whether the dropdown is open
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
        setWidth(window.innerWidth); // Update the width state
    };


    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []); 
  return (
    <div className='nav'>
      <div className='nav-logo'>TSSI</div>
      <button className="toggle" onClick={toggleDropdown}>
          {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
           <ul className='nav-menu'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#digitization">Digitization</a></li>

            </ul>
      )}
    </div>
  )
}

export default Navbar;