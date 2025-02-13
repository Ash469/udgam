import React from 'react';
import './TeamCard.css';
import { TeamData, Mangers, WebsiteContributors } from './data';
import { FaPhone, FaEnvelope, FaLinkedin,FaGithub } from 'react-icons/fa';
import NavBar from './nav_bar';
import Footer from './footer';
import ECellLogo from "../assets/ecell.svg";

import ambuj from '../assets/team/ambuj.png';
import ayush from '../assets/team/ayush.png';
import bhargavi from '../assets/team/bhargavi.png';
import bhuvanaa from '../assets/team/bhuvanaa.png';
import elika from '../assets/team/elika.png';
import krishnam from '../assets/team/krishnam.png';
import nishtha from '../assets/team/nishtha.png';
import rahul from '../assets/team/rahul.png';
import suraj from '../assets/team/suraj.png';
import vedangi from '../assets/team/vedangi.png';
import aniket from '../assets/team/aniket.png';
import mrinal from '../assets/team/mrinal.jpg';

const getImageByName = (name) => {
  const nameToImage = {
    'Ambuj Mishra': ambuj,
    'Ayush Mishra': ayush,
    'Bhargavi Divyam': bhargavi,
    'Bhuvanaa S': bhuvanaa,
    'ELIKA': elika,
    'Krishnam Gupta': krishnam,
    'Mrinal Agarwal': mrinal,
    'Nishtha Khatri': nishtha,
    'Rahul Kumar': rahul,
    'Suraj Kumar': suraj,
    'Vedangi Jawade': vedangi,
    'Aniket Gupta': aniket,
  };
  return nameToImage[name] || ECellLogo;
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
            <div className="card-back">
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
      <div
        className="module-front"
        style={{
          backgroundImage: `url(${ECellLogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <p className="Modules">{module}</p>
      </div>
      <div className="module-back">
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


      <div className="team-page-title">
        <h1 className="team-heading">WEBSITE CONTRIBUTORS</h1>
      </div>
      <div className="contributors-container">
        {WebsiteContributors.map((contributor, index) => (
          <div key={index} className="team-card">
            <div className="card-front" style={{
              backgroundImage: `url(${getImageByName(contributor.name)})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center'
            }}>
    <h2 className="member-name" style={{
      fontSize: '1.3rem',
      fontFamily: 'TT Firs Neue Trl',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)', /* Made text shadow lighter */
      opacity: 0.99,
      fontWeight: 700,
      letterSpacing: '0.5px',
      padding: '5px 10px',
      borderRadius: '4px',
      background: 'rgba(0, 172, 237, 0.5)', /* Increased background opacity for brightness */
      backdropFilter: 'blur(5px)'
    }}>{contributor.name}</h2>
            </div>
            <div className="card-back">
              <div className="links-container">
                <a href={`tel:${contributor.mobile}`} target="_blank" rel="noopener noreferrer">
                  <FaPhone className="social-icon" />
                </a>
                <a href={`mailto:${contributor.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href={contributor.linkdn} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default TeamCards;
