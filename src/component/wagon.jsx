import React from 'react';
import { motion } from 'framer-motion';
import './wagon.css';

const Wagon = ({ imageUrl, title, designation,pastcompany ,animationProps }) => {
  return (
    <motion.div
      className="wagon-container"
      {...animationProps} // Animation controls passed as props
    >
      <div className="wagon">
        <div className="horizontal-line line1"></div>
        <div className="horizontal-line line2"></div>
        <div className="horizontal-line line3"></div>
        {/* Image Section */}
        <div
          className="wagon-image bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-label={title}
        ></div>

        {/* Content Section */}
        <div className="speaker-content">
        
            <div className="svg-container2">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 81 100" fill="none">
                <g style={{ mixBlendMode: "soft-light" }}>
                  <path d="M80.5 0L14.5426 100H0.5L65.8192 0H80.5Z" fill="#F4F5F6" fillOpacity="0.1" />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="100" viewBox="0 0 81 100" fill="none">
                <g style={{ mixBlendMode: "soft-light" }}>
                  <path d="M80.5 0L14.5426 100H0.5L65.8192 0H80.5Z" fill="#F4F5F6" fillOpacity="0.1" />
                </g>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="97" height="100" viewBox="0 0 97 100" fill="none">
                <g style={{ mixBlendMode: "soft-light" }}>
                  <path d="M96.5 0L30.5426 100H0L65 0H96.5Z" fill="#F4F5F6" fillOpacity="0.1" />
                </g>
              </svg>
            </div>
            <div className="speaker-content-text">
            <h1>{title}</h1>
            <h2>{designation},{pastcompany}</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Wagon;
