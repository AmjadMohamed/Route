import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

export default function Footer() {
  return (
    <div>
      <div className="Bg-Secondary-Color w-100">
        <div className="container">
          <div className="row justify-content-around align-items-start text-white g-5 py-5">
            <div className="col-4">
              <div className="inner d-flex flex-column text-center">
                <h3 className='text-uppercase fw-medium fs-3'>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-4">
              <div className="inner d-flex flex-column text-center">
                <h3 className='text-uppercase fw-medium fs-3'>AROUND THE WEB</h3>
                <ul className="d-flex justify-content-center gap-3 mt-2 list-unstyled">
                  <li className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </li>
                  <li className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </li>
                  <li className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </li>
                  <li className="social-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="inner d-flex flex-column text-center">
                <h3 className='text-uppercase fw-medium fs-3'>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Secondary-footer text-white text-center p-4">
          <p className='p-0 m-0'>Copyright © Your Website 2021</p>
        </div>
      </div>
    </div>
  )
}
