import React, { useState } from 'react';
import thumbnail from '../assets/thumbnail.png'; // Import the thumbnail image
import video from '../assets/1.webm'; // Import the video file
import './WhatIsUdgam.css'; // Import the CSS file

const WhatIsUdgam = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const handleThumbnailClick = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className="what-is-udgam-container">
            <div className="video-container">
                {!isVideoLoaded ? (
                    <div className="thumbnail-wrapper" onClick={handleThumbnailClick}>
                        <img
                            src={thumbnail}
                            alt="Video Thumbnail"
                            className="video-thumbnail"
                        />
                        <div className="play-button">
                            ▶
                        </div>
                    </div>
                ) : (
                    <video
                        src={video}
                        controls
                        className="video"
                        autoPlay
                    />
                )}
            </div>
            <div className="info-container">
                <p className="udgam-description">
                    UDGAM is the flagship event of the E-Cell, IIT Guwahati. It was conceptualized to develop and spread the spirit of entrepreneurship among the youth of the North-East, and India in general thus earning itself the reputation of being the largest E-Summit in the north-east. UDGAM acts as an exclusive platform for entrepreneurs, startup enthusiasts, and product managers to meet, discuss, explore, share, debate, and have fun, while celebrating the idea of entrepreneurship and innovation.
                </p>
                <h1 className="heading">What is Udgam?</h1>
            </div>
        </div>
    );
};

export default WhatIsUdgam;
