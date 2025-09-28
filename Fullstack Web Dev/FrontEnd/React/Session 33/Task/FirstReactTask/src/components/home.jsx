import React, { useEffect } from 'react';
import avatarImage from '../assets/imgi_1_avataaars.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className='vh-100 Bg-Main-Color d-flex flex-column justify-content-center align-items-center'>
      <div className="mainImage mb-4">
        <img src={avatarImage} alt="Avatar" className='w-100' />
      </div>
      <div className="content text-white text-center">
        <h2 className="text-uppercase fs-1 fw-bold">start framework</h2>
        <div className="star-separator star-separator-white my-2">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <p className='m-0'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
