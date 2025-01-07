import React from 'react';
import './TeamCard.css';
import { TeamData, Mangers } from './data';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import NavBar from './nav_bar';
import Footer from './footer';
import ECellLogo from "../assets/ecell.svg"; 

import ambuj from '../assets/ambuj.png';
import ayush from '../assets/ayush.png';
import bhargavi from '../assets/bhargavi.png';
import bhuvanaa from '../assets/bhuvanaa.png';
import elika from '../assets/elika.png';
import krishnam from '../assets/krishnam.png';
import nishtha from '../assets/nishtha.png';
import rahul from '../assets/rahul.png';
import suraj from '../assets/suraj.png';
import vedangi from '../assets/vedangi.png';
import aniket from '../assets/aniket.png';


const getImageByName = (name) => {
  const nameToImage = {
    'Ambuj Mishra': ambuj,
    'Ayush Mishra': ayush,
    'Bhargavi Divyam': bhargavi,
    'Bhuvanaa S': bhuvanaa,
    'ELIKA': elika,
    'Krishnam Gupta': krishnam,
    'Nishtha Khatri': nishtha,
    'Rahul Kumar': rahul,
    'Suraj Kumar': suraj,
    'Vedangi Jawade': vedangi,
    'Aniket Gupta': aniket,
  };
  return nameToImage[name] || headDemo;
};


const TeamCards = () => {
  const groupedManagers = Mangers.reduce((acc, manager) => {
    const { team } = manager;
    if (!acc[team]) acc[team] = [];
    acc[team].push(manager);
    return acc;
  }, {});
  return (
    <>
      <NavBar />
      <div className="team-page-title">
        <h1 className="team-heading">MEET OUR TEAM</h1>
      </div>
      <div className="team-cards-container">
        {TeamData.map((member, index) => (
          <div key={index} className="team-card">
              <div className="card-front" style={{
            backgroundImage: `url(${getImageByName(member.name)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <h2 className="member-name">{member.name}</h2>
              <p className='member-team'>{member.team}</p>
            </div>
            <div className="card-back" style={{
            backgroundImage: `url(${getImageByName(member.name)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
              <div className="links-container">
                <a href={`tel:${member.mobile}`} target="_blank" rel="noopener noreferrer">
                  <FaPhone className="social-icon" />
                </a>
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href={member.linkdn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="team-page-title">
        <h1 className="team-heading">MANAGERS</h1>
      </div>
      <div className="managers-container">
        {Object.entries(groupedManagers).map(([module, managers], index) => (
          <div key={index} className="module-section">
            <div className="module-front">
              <p className='Modules'>{module}</p>
            </div>
            <div className="moudle-back">
              <ul className="managers-list">
                {managers.map((manager, idx) => (
                  <li key={idx} className="manager-item">
                    {manager.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default TeamCards;
