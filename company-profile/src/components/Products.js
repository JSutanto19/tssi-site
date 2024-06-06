import React from 'react'
import '../styles/client.css'
import img1 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/p1.JPG'
import img2 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/Sharp_TV.JPG'
import img3 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/pxg930.JPG'
import img4 from '/Users/jason_sutanto/CompanyProfile-/company-profile/src/img/img4.JPG'

function Products() {
  return (
    <div className='outer-div3'>
      <h1 className='h1-style'>Products</h1>
        <div className='service-list'>
          <div className='service-card2'>
            <img src={img1} alt="Product 1" />
            <h3>Car Product</h3>
            <div className='card-text2'>
              <p>This is a Car product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img2} alt="Sharp Tv" />
            <h3>Tv Product</h3>
            <div className='card-text2'>
              <p>This is a Tv product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img3} alt="Printer" />
            <h3>Printer Product</h3>
            <div className='card-text2'>
              <p>This is a Printer product.</p>
            </div>
          </div>
          <div className='service-card2'>
            <img src={img4} alt="Olly Waver" />
            <h3>Motorcycle Product</h3>
            <div className='card-text2'>
              <p>This is a Motorcycle product.</p>
            </div>
          </div>
        </div>
      <div className='clients-para'>
        <p>Our team is made up of experienced professionals who are passionate about technology and dedicated to helping businesses succeed. With expertise in web development, app development, software development, and digital marketing, our team has the skills and knowledge to deliver exceptional results.</p>
      </div>
     
    </div>
  )
}

export default Products
