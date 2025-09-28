import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import imgi1 from "../assets/imgi_1_poert1.png";
import imgi2 from "../assets/imgi_2_port2.png";
import imgi3 from "../assets/imgi_3_port3.png";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="container-fluid bg-white d-flex flex-column align-items-center py-4 my-5">
      <div className="text-center mb-5">
        <h1 className="portfolio-title">PORTFOLIO COMPONENT</h1>
        <div className="star-separator star-separator-secondary mt-2">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi1)}>
              <img src={imgi1} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi2)}>
              <img src={imgi2} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi3)}>
              <img src={imgi3} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi1)}>
              <img src={imgi1} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi2)}>
              <img src={imgi2} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div className="portfolio-item" onClick={() => openModal(imgi3)}>
              <img src={imgi3} alt="portfolio" className="w-100 rounded-3" />
              <div className="portfolio-overlay">
                <FontAwesomeIcon icon={faPlus} className="portfolio-plus-icon" />
              </div>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeModal}>
            <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-body p-0">
                  <img src={selectedImage} alt="Portfolio enlarged" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
