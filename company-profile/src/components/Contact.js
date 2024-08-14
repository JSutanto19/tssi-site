import React from 'react';
import reception from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/contact-2.png';
import img2 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/contact-1.jpg';

import '/Users/jason_sutanto/CompanyProfile-/company-profile/src/styles/Contact.css';
import { BiMailSend } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiCurrentLocation } from "react-icons/bi";





const Contact = () => {
  return (
    <div className='main-container'>
      <h1>Contact Us</h1>
      <div className='contact-background'>
        <div className='image-holder' style={{flexDirection:'column', gap:'20px', marginBottom:'50px'}}>
          <img className='image' src={img2} alt='Reception'/>
          <img className='image' src={reception} alt="reception 2"/>
        </div>
        <div className='text-holder' style={{marginTop:'50px'}}>
         <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', gap:'20px', flex:'1'}}>
            <div className='outer-addr-div' style={{flex:1}}>
              <div style={{display:'flex', flexDirection:'row'}}>
                  <h2 style={{textAlign:'left', marginLeft:'10px', marginTop:'2px'}}>Email</h2>
                  <div className='icon-contact'><BiMailSend color='white' size={'22px'}/></div>
              </div>
              <p className='contact-para'>tssi@gmail.com</p>
            </div>
            <div className='outer-addr-div' style={{flex:1}}>
              <div style={{display:'flex', flexDirection:'row'}}>
                  <h2 style={{textAlign:'left', marginLeft:'10px'}}>Phone</h2>
                  <div className='icon-contact'><BiPhone color='white' size={'22px'}/></div>
              </div>
              <p className='contact-para'>(021) 89911080</p>
            </div>
          </div>
          <div className='outer-addr-div' style={{marginTop:'40px',}}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <h2 style={{textAlign:'left', marginLeft:'10px'}}>Address</h2>
                <div className='icon-contact'><BiCurrentLocation color='white' size={'22px'}/></div>
            </div>
            <div className='addr-div'>
              <span>Jl.Pinang Blok F 17 No.3 <br/></span>
              <span>Delta Silicon 3,<br/></span>
              <span>Lippo Cikarang, Bekasi 17550</span>
            </div>
            <div className='addr-div'>
              <span>Jl. Jati 6 Blok J5 No. 19 <br/></span>
              <span>Newton Techno Park, <br/></span>
              <span>Lippo Cikarang, Bekasi 17550 <br/></span>
            </div>
            <div className='addr-div'>
              <span>JI Cempaka Blok F16 no 30A <br/></span>
              <span>Delta Silicon 3,<br/></span>
              <span>Lippo Cikarang, Bekasi 17550</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
