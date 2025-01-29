import React from "react";
import { motion } from 'framer-motion';
import "./landing_sponsors.css";

// Import sponsor logos
import nebulaImg from '../assets/sponsors/nebula.png';
import ubonImg from '../assets/sponsors/ubon.png';
import ctrlsImg from '../assets/sponsors/ctrls.png';
import idfcImg from '../assets/sponsors/IDFC.png';
import indianOilImg from '../assets/sponsors/Indian Oil.png';

const sponsors = [
    {
        id: 1,
        name: "Nebula",
        logo: nebulaImg,
        link: "#",
        description: "Ecosystem Partner"
    },
    {
        id: 2,
        name: "UBON",
        logo: ubonImg,
        link: "#",
        description: "Powered by"
    },
    {
        id: 3,
        name: "CtrlS",
        logo: ctrlsImg,
        link: "#",
        description: "Associate Title Sponsor"
    },
    {
        id: 4,
        name: "IDFC First Bank",
        logo: idfcImg,
        link: "#",
        description: "Banking Partner"
    },
    // {
    //     id: 5,
    //     name: "Indian Oil",
    //     logo: indianOilImg,
    //     link: "#",
    //     description: "Fuel Partner"
    // }
];

const LandingSponsors = () => {
    return (
      <>
      <motion.div 
        className="landing-sponsors-container flex flex-wrap justify-center items-center gap-8 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        {sponsors.map((sponsor) => (
            <a
                key={sponsor.id}
                href={sponsor.link}
                className="sponsor-card flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 w-64 h-64"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="sponsor-logo max-w-full max-h-40 object-contain mb-4"
                />
                <div className="text-center">
                    <h1 className="text-m text-gray-600">{sponsor.description}</h1>
                    <h5 className="text-lg font-bold text-gray-800 mb-2">{sponsor.name}</h5>
                </div>
            </a>
        ))}
    </motion.div>
    </>
    );
};

export default LandingSponsors;
