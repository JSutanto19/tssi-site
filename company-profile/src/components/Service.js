import React from 'react'
import '../styles/service.css'
import img1 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Mold_Maker.JPG'
import img2 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Injection_Machine.JPG'
import img3 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/assembly.JPG'
import img4 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/qc.JPG'
import img5 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Painting.JPG'



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
                <img src={img5} />
                <div className='card-text'>
                    <h3>Painting</h3>
                </div>
            </div>
            <div className='service-card'>
                <img src={img3} style={{height:'100%', width:'100%'}} />
                <div className='card-text'>
                    <h3>Digital</h3>
                </div>
            </div>
        </div>
        <div className='service-list' style={{margin:'5px'}}>
            <div className='service-row2'>
                <img src={img2} />
                <div className='card-text'>
                    <h3>Injection Molding</h3>
                </div>
            </div>
            <div className='service-card'>
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