import { Link } from 'react-router-dom';
import '/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>TSSI</div>
      <ul className='nav-menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar;
