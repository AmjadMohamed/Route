import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center py-5'>
      <div className="content text-center Text-Secondary-Color mb-4">
        <h2 className="text-uppercase fs-1 fw-bold">contact section</h2>
        <div className="star-separator star-separator-secondary my-3">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control contact-form-input"
                  name="userName"
                  placeholder="userName"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="number"
                  className="form-control contact-form-input"
                  name="userAge"
                  placeholder="userAge"
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control contact-form-input"
                  name="userEmail"
                  placeholder="userEmail"
                />
              </div>
              
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control contact-form-input"
                  name="userPassword"
                  placeholder="userPassword"
                />
              </div>
              
              <div className="text-start">
                <button
                  type="button"
                  className="btn contact-submit-btn text-white"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
