import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div className='vh-100 Bg-Main-Color d-flex flex-column justify-content-center align-items-center'>
      <div className="content text-white text-center">
        <h2 className="text-uppercase fs-1 fw-bold">about component</h2>
        <div className="star-separator star-separator-white my-2">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className="container px-5">
        <div className="row g-3">
          <div className="col-md-6 text-white">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="col-md-6 text-white">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
      </div>
    </div>
  )
}
