import React from 'react'
import '../styles/service.css'
import img1 from '../img/Mold_Maker.JPG'
import img2 from '../img/Injection_Machine.JPG'
import img3 from '../img/assembly.JPG'
import img4 from '../img/qc.JPG'
import img5 from '../img/Painting.JPG'


function Service() {
  return (
    <div className='outer-div2'>
        <h1 className='h1-style'>Services</h1>
        <div className='service-list'>
            <div className='service-card'>
                <img src={img1}/>
                <div className='card-text'>
                    <h3>Mold Maker</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img2} />
                <div className='card-text'>
                    <h3>Injection Molding</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img5} style={{height:'100%', width:'100%'}} />
                <div className='card-text'>
                    <h3>Painting</h3>
                </div>
            </div>
        </div>
        <div className='service-list-row2' style={{marginTop:'30px', padding:'0px', margin:'10px'}}>
            <div className='service-card'>
                <img src={img3}/>
                <div className='card-text'>
                    <h3>Sub Assy & Second Process</h3>
                </div>
            </div>
            <div className='service-card' style={{marginLeft:'0px'}}>
                <img src={img4} />
                <div className='card-text'>
                    <h3>Quality Control</h3>
                </div>
            </div>
        </div>
      
        <div className='service-para'>
            <p>Our services are tailored to meet the unique needs of each client, ensuring that we deliver effective solutions that help businesses grow.</p>
        </div>
    </div>
  )
}

export default Service