import React, { useEffect } from "react";
import AOS from "aos"; // For scroll animations
import "aos/dist/aos.css"; // AOS styles
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa"; // Icons for details
import { TeamData } from "./data"; // Import data
import NavBar from "./nav_bar";
import Footer from "./footer";
import { motion } from "framer-motion";


// Individual Card Component
const Card = ({ name, mobile, email, linkdn }) => {
  return (
    <div
      className="border border-gray-300 rounded-lg p-5 m-2 bg-white shadow-md text-center max-w-xs transform transition duration-300 hover:scale-105 hover:shadow-lg"
      data-aos="fade-up"
    >
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="flex items-center justify-center mb-2">
        <FaPhone className="mr-2 text-green-500" />
        {mobile}
      </p>
      <p className="flex items-center justify-center mb-2">
        <FaEnvelope className="mr-2 text-blue-500" />
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      </p>
      <p className="flex items-center justify-center">
        <FaLinkedin className="mr-2 text-blue-700" />
        <a
          href={linkdn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          View Profile
        </a>
      </p>
    </div>
  );
};

// Main TeamCards Component
const TeamCards = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 50, // Offset from the viewport (in px)
    });
  }, []);

  return (
    <>
      <NavBar />
      {/* <div className="flex flex-col items-center p-5">
        {TeamData.map((team, teamIndex) => (
          <div key={teamIndex} className="mb-12 text-center w-full">
            <h2
              className="text-2xl font-bold mb-6 text-gray-800 uppercase"
              data-aos="fade-right"
            >
              {team.teamName}
            </h2>
            <div
              className="flex flex-wrap justify-center gap-8"
              data-aos="fade-up"
            >
              {team.members.map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  mobile={member.mobile}
                  email={member.email}
                  linkdn={member.linkdn}
                />
              ))}
            </div>
          </div>
        ))}
      </div> */}
         <main className="flex-grow mt-20">
       <motion.div
      className="coming-soon-container flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="coming-soon-content"    style={{ background: "linear-gradient(135deg, #0c79b8, #1c1f26)" }}>
        <h1 >Coming Soon</h1>
        <p>We're working hard to bring something amazing. Stay tuned!</p>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
    </main>
      <Footer />
    </>
  );
};

export default TeamCards;
