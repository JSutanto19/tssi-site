import React from 'react';
import reception from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Reception.JPG';
import '/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Contact.css';

const Contact = () => {
  return (
    <div className='main-container'>
      <h1>Contact Us</h1>
      <div className='contact-background'>
        <div className='image-holder'>
          <img className='image' src={reception} alt='Reception'/>
        </div>
        <div className='text-holder'>
          <h2>Address</h2>
          <p>Jl.Pinang Blok F 17 No.3 Delta Silicon 3 Lippo, Cicau, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17550</p>
          <h2>Email</h2>
          <p>tssi@gmail.com</p>
          <h2>Phone</h2>
          <p>(021) 89911080</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
