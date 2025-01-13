import React, { useState } from 'react';
import thumbnail from '../assets/thumbnail2.png';
import video from '../assets/1.webm';
import './WhatIsUdgam.css';

const WhatIsUdgam = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleThumbnailClick = () => {
        setIsTransitioning(true);
        // Add a small delay before actually loading the video
        setTimeout(() => {
            setIsVideoLoaded(true);
        }, 300); // Matches the transition duration
    };

    return (
        <div className="what-is-udgam-container">
            <div className="video-container">
                <div className={`thumbnail-wrapper ${isTransitioning ? 'fade-out' : ''}`} 
                     onClick={handleThumbnailClick}
                     style={{ display: isVideoLoaded ? 'none' : 'block' }}>
                    <img
                        src={thumbnail}
                        alt="Video Thumbnail"
                        className="video-thumbnail"
                    />
                    <div className="play-button">
                        ▶
                    </div>
                </div>
                <div className={`video-wrapper ${isVideoLoaded ? 'fade-in' : ''}`}
                     style={{ display: !isVideoLoaded ? 'none' : 'block' }}>
                          <div className="play-button">
                        ▶
                    </div>
                    <video
                        src={video}
                        controls
                        className="video"
                        autoPlay={isVideoLoaded}
                    />
                </div>
            </div>
            <div className="info-container">
                <p className="udgam-description">
                UDGAM is the flagship event of the E-Cell, IIT Guwahati. It was conceptualized to develop and spread the spirit of entrepreneurship among the youth of the North-East and India in general, thus earning itself the reputation of being the largest E-Summit in the North-East. UDGAM acts as an exclusive platform for entrepreneurs, startup enthusiasts, and product managers to meet, discuss, explore, share, debate, and have fun while celebrating the idea of entrepreneurship and innovation.
                </p>
            </div>
        </div>
    );
};

export default WhatIsUdgam;
