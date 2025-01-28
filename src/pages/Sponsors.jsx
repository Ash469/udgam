import React from 'react';
import NavBar from "./nav_bar";
import Footer from "./footer";
import { motion } from 'framer-motion';
import './Sponsors.css';

// Import images
import nebulaImg from '../assets/sponsors/nebula.png';
import ubonImg from '../assets/sponsors/ubon.png';
import ctrlsImg from '../assets/sponsors/ctrls.png';
import indianOilImg from '../assets/sponsors/Indian Oil.png';
import hdfcImg from '../assets/sponsors/IDFC.png';
import imsImg from '../assets/sponsors/IMS.png';
import safexpressImg from '../assets/sponsors/SafeExpress.png';
import eduFabImg from '../assets/sponsors/EDU Fab.png';
import gplusImg from '../assets/sponsors/Gplus.png';
import tunnedImg from '../assets/sponsors/tunned.png';
import iitImg from '../assets/sponsors/iit.png';
import biracImg from '../assets/sponsors/Birac.png';
import sosImg from '../assets/sponsors/SOS.png';
import assamImg from '../assets/sponsors/assam.png';
import productFolkImg from '../assets/sponsors/The Product Folk.png';
import zohoImg from '../assets/sponsors/Zoho.png';
import pluralImg from '../assets/sponsors/Plural.png';
import pitchImg from '../assets/sponsors/pitch.png';
import spantechImg from '../assets/sponsors/Spantech.png';
import aspireImg from '../assets/sponsors/aspire.png';
import riotImg from '../assets/sponsors/Riot.png';
import vakxImg from '../assets/sponsors/vakx.png';
import bharatImg from '../assets/sponsors/bharat.png';
import skillImg from '../assets/sponsors/skill.png';
import zomatoImg from '../assets/sponsors/zomato.png';

const sponsorData = {
  titleSponsor: {
    title: "Title Sponsor",
    sponsors: [
      { name: "Nebula", image: nebulaImg, link: "#" }
    ]
  },
  associateTitleSponsors: {
    title: "Associate Title Sponsors",
    sponsors: [
      { name: "UBON", image: ubonImg, link: "#" },
      { name: "CtrlS", image: ctrlsImg, link: "#" },
      { name: "IndianOil", image: indianOilImg, link: "#" },
      { name: "IDFC First", image: hdfcImg, link: "#" }
    ]
  },
  mainPartners: {
    title: "Our Partners",
    sponsors: [
      { name: "IMS", image: imsImg, link: "#", label: "Encode Title Partner" },
      { name: "SafeExpress", image: safexpressImg, link: "#", label: "Disrupt Title Sponsor" },
      { name: "EDU Fab", image: eduFabImg, link: "#", label: "Sustainability Partner" },
      { name: "G Plus", image: gplusImg, link: "#", label: "Special Partner" }
    ]
  },
  otherPartners: [
    { 
      title: "Our Partners",
      sponsors: [
        { name: "Tuned By", image: tunnedImg, link: "#" },
        { name: "IIT Guwahati", image: iitImg, link: "#" },
        { name: "BIRAC", image: biracImg, link: "#" },
        { name: "SOS", image: sosImg, link: "#" }
      ]
    },
    {
      title: "Supporting Partners",
      sponsors: [
        { name: "Assam Tourism", image: assamImg, link: "#" },
        { name: "The Product Folk", image: productFolkImg, link: "#" },
        { name: "Zoho", image: zohoImg, link: "#" },
        { name: "Plural", image: pluralImg, link: "#" },
        { name: "Pitch Partners", image: pitchImg, link: "#" }
      ]
    },
    {
      title: "Ecosystem Partners",
      sponsors: [
        { name: "Spantech", image: spantechImg, link: "#" },
        { name: "Aspire", image: aspireImg, link: "#" },
        { name: "Riot", image: riotImg, link: "#" },
        { name: "VakX", image: vakxImg, link: "#" },
        { name: "Bharat", image: bharatImg, link: "#" },
        { name: "Skillzo", image: skillImg, link: "#" },
        { name: "Zomato", image: zomatoImg, link: "#" }
      ]
    }
  ]
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const SponsorCard = ({ sponsor }) => (
  <motion.a
    href={sponsor.link}
    className="sponsor-card"
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {sponsor.label && <div className="sponsor-label">{sponsor.label}</div>}
    <img 
      src={sponsor.image} 
      alt={`${sponsor.name} logo`}
      className="sponsor-image"
      loading="lazy"
    />
    <div className="sponsor-name">{sponsor.name}</div>
  </motion.a>
);

const SponsorSection = ({ title, sponsors, className = "" }) => (
  <motion.section
    className={`sponsor-section ${className}`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
  >
    {title && (
      <motion.h2 
        className="sponsor-title"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
    )}
    <motion.div 
      className="sponsor-grid"
      variants={staggerContainer}
    >
      {sponsors.map((sponsor, index) => (
        <SponsorCard key={index} sponsor={sponsor} />
      ))}
    </motion.div>
  </motion.section>
);

const Sponsors = () => (
  <div className="sponsors-page">
    <NavBar />
    <main className="sponsors-main">
      <div className="sponsors-container">
        <SponsorSection 
          title={sponsorData.titleSponsor.title}
          sponsors={sponsorData.titleSponsor.sponsors}
          className="title-sponsor-section"
        />

        <SponsorSection 
          title={sponsorData.associateTitleSponsors.title}
          sponsors={sponsorData.associateTitleSponsors.sponsors}
          className="associate-sponsors-section"
        />

        <SponsorSection 
          title={sponsorData.mainPartners.title}
          sponsors={sponsorData.mainPartners.sponsors}
          className="main-partners-section"
        />

        {sponsorData.otherPartners.map((section, index) => (
          <SponsorSection 
            key={index}
            title={section.title}
            sponsors={section.sponsors}
            className="other-partners-section"
          />
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Sponsors;
