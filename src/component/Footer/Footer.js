import React from 'react'
import './Footer.css'
import Footerlogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 text-center mb-5'>
                    <a href='#' className='footerlogo'> <img src={Footerlogo} /> </a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque. </p>
                </div>
                <div className='col-md-4 text-center mb-5'>
                    <h3>LOCATIONS</h3>
                    <p>251 Lorem ipsum dolor <br />
                    Brooklyn, BXY 92101</p>
                </div>
                <div className='col-md-4 text-center mb-5'>
                    <h3>WORKING </h3>
                    <p> Monday - Friday : 07:00 - 21:00 <br/>
                        Saturday : 07:00 - 16:00 <br/>
                        Sunday Closed
                     </p>
                </div>
            </div>
            
            <div className='copyright'>© 2023 All Rights Reserved</div>
        </div>
    </div>
  )
}

export default Footer