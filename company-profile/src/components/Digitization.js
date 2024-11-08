import React from 'react';
import '../styles/client.css';
import { GoChecklist } from "react-icons/go";
import { FaComputer } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";

function Digitization() {
  return (
    <div className='digit-div'>
      <h1 className='h1-style'>Digitization</h1>
      <h3 className='clients-para'>Our company strives to achieve industry 4.0. With our sheer commitment to innovation we've developed software to automate several of our business operations</h3>
      <div className='service-list'>
        <div className='service-card2' style={{ borderRadius: '250px', borderColor: '#39b435', borderWidth: '1px', borderStyle: 'solid', padding: '20px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
          <GoChecklist color='#39b435' size={'100px'} />
          <h3 style={{ color: '#39b435', backgroundColor:'white', fontSize:'20px' }}>QC App</h3>
          <div className='card-text2' style={{backgroundColor:'#39b435'}}>
            <p style={{ overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth:'300px'}}>
              This application is designed to meet the needs of production recording and management in a manufacturing environment. With various processes, this application ensures that every aspect of production is recorded in detail and accurately, helping in better decision making and increasing operational efficiency.
            </p>
          </div>
        </div>

        <div className='service-card2' style={{ marginTop:'80px',borderRadius: '250px', borderColor:'white', borderWidth: '1px', borderStyle: 'solid', padding: '20px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
           <FaComputer color='#FFA500' size={'100px'}/>
            <h3 style={{color:'#FFA500', backgroundColor:'white', fontSize:'20px' }}>SIP</h3>
            <div className='card-text2' style={{backgroundColor:'#FFA500'}}>
              <p style={{ overflowWrap: 'break-word', wordBreak: 'break-word', color:'white', maxWidth:'300px' }}>This software is designed to meet various operational and internal management needs of the company. The goal is to improve efficiency, accuracy, and productivity through process automation and better data integration.</p>
            </div>
        </div>

        <div className='service-card2' style={{ borderRadius: '250px', borderColor: '#3498DB', borderWidth: '1px', borderStyle: 'solid', padding: '20px', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center'}}>
          <FaMicrochip color='#3498DB' size={'100px'}/>
          <h3 style={{color:'#3498DB', backgroundColor:'white', fontSize:'20px'}}>RFID Reader</h3>
          <div className='card-text2' style={{backgroundColor:'#3498DB'}}>
            <p style={{ overflowWrap: 'break-word', wordBreak: 'break-word', maxWidth:'300px' }}>This application optimizes production and warehouse management with RFID technology. It ensures more accurate tracking of all product and box movements.</p>
          </div>
        </div>
      </div>
      </div>    
  );
}
export default Digitization;
