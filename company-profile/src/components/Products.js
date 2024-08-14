import React from 'react'
import '../styles/client.css'
import img1 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/p1.JPG'
import img2 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Sharp_TV.JPG'
import img3 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/pxg930.JPG'
import img4 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/img4.JPG'
import img5 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/prod-1.jpg'

function Products() {
  return (
    <div className='outer-div3'>
      <h1 className='h1-style'>Products</h1>
      <div className='prod-div'>
      <div style={{
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      width: '1000px',
      height: '860px',
      marginLeft:'20px',
      marginTop:'10px',
      marginRight:'25px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor:'white',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)'
    }}>
      <img src={img5} alt="Product 1" style={{ width: '100%', height: '80%' }} />
      <div style={{ padding: '15px', backgroundColor: '#fff', padding:'20px'}}>
        <h3 style={{ margin: '10px 0 0 0', color: '#000', fontSize: '18px' }}>These are the products that our company strives to create and deliver to our clients. We ensure exellence and quality work</h3>
      </div>
    </div>
        <div className='service-list'>
          <div className='service-card2'>
            <img src={img1} alt="Product 1" />
            <h3>Car Parts</h3>
            <div className='card-text2'>
              <p>This is a Car product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img2} alt="Sharp Tv" />
            <h3>Tv Parts</h3>
            <div className='card-text2'>
              <p>This is a Tv product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img3} alt="Printer" />
            <h3>Printer Parts</h3>
            <div className='card-text2'>
              <p>This is a Printer product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img4} alt="Olly Waver" />
            <h3>Motorcycle Parts</h3>
            <div className='card-text2'>
              <p>This is a Motorcycle product.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='clients-para'>
        <p>Our team is made up of experienced professionals who are passionate about technology and dedicated to helping businesses succeed. With expertise in web development, app development, software development, and digital marketing, our team has the skills and knowledge to deliver exceptional results.</p>
      </div> */}
     
    </div>
  )
}

export default Products
