import React, { useState } from 'react';
import logo from '../assets/logo.png';
import './nav_bar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main w-full">
      <nav className="nav_bar flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-4 h-11" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="nav_link">Home</a>
          <a href="events" className="nav_link">Events</a>
          <a href="schedule" className="nav_link">Schedule</a>
          <a href="sponsors" className="nav_link">Sponsors</a>
          {/* <a href="speakers" className="nav_link">Speakers</a> */}
          <a href="team" className="nav_link">Our Team</a>
          <a href="pass" className="nav_button">Buy Tickets</a>
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? 'Close' : '☰'}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="mobile_nav_bar flex flex-col items-center p-4">
          <a href="/" className="mobile_link">Home</a>
          <a href="events" className="mobile_link">Events</a>
          <a href="schedule" className="mobile_link">Schedule</a>
          <a href="sponsors" className="mobile_link">Sponsors</a>
          {/* <a href="speakers" className="mobile_link">Speakers</a> */}
          <a href="team" className="mobile_link">Our Team</a>
          <a href="pass" className="mobile_button">Buy Tickets</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
