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
import toiImg from '../assets/sponsors/TOI.png';
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
import zoho2 from '../assets/sponsors/Zoho-for-Startups.png';
import pluralImg from '../assets/sponsors/Plural.png';
import pitchImg from '../assets/sponsors/pitch.png';
import spantechImg from '../assets/sponsors/Spantech.png';
import aspireImg from '../assets/sponsors/aspire.png';
import riotImg from '../assets/sponsors/Riot.png';
import vakxImg from '../assets/sponsors/vakx.png';
import bharatImg from '../assets/sponsors/bharat.png';
import smallestAi from '../assets/sponsors/smallestAi.png';
import kxxImg from '../assets/sponsors/kxx.png';
import emtImg from '../assets/sponsors/emt.png';
import skillImg from '../assets/sponsors/skill.png';
import zomatoImg from '../assets/sponsors/zomato.png';
import ankurImg from '../assets/sponsors/ankur.png';
import YhillsImg from '../assets/sponsors/yhills.png';
import unstopImg from '../assets/sponsors/unstop.png';
import codeiumImg from '../assets/sponsors/code.png';
import geksonImg from '../assets/sponsors/geksons.png';
import farmleyImg from '../assets/sponsors/farmley.png';
import campusImg from '../assets/sponsors/campusTimes.png';
import startTalkyImg from '../assets/sponsors/startupTalky.png';
import TechStoryImg from '../assets/sponsors/techStory.png';
import youthImg from '../assets/sponsors/youth.png';
import siliconImg from '../assets/sponsors/silicon.png';
import startupNewsImg from '../assets/sponsors/startNews.png';
import news18Img from '../assets/sponsors/khbar.png';
import baneImg from '../assets/sponsors/bane.png';

const sponsorData = {
  titleSponsor: {
    title: "Title Sponsor",
    sponsors: [
      { name: "Nebula", image: nebulaImg, link: "#", description: "Ecosystem Partner" }
    ]
  },
  associateTitleSponsors: {
    title: "",
    sponsors: [
      { name: "CtrlS", image: ctrlsImg, link: "#", description: "Associate Title Sponsor" },
      { name: "UBON", image: ubonImg, link: "#", description: "Powered by" },
      { name: "IndianOil", image: indianOilImg, link: "#", description: "Fuel Partner" },
      { name: "IDFC First", image: hdfcImg, link: "#", description: "Banking Partner" }
    ]
  },
  mainPartners: {
    title: "Our Partners",
    sponsors: [
      { name: "TOI", image: toiImg, link: "#", description: "In Association With" },
      { name: "birac", image: biracImg, link: "#", description: "Associate Title Startup Expo" },
      { name: "IMS", image: imsImg, link: "#", description: "Carrer Partner" },     
      { name: "SafeExpress", image: safexpressImg, link: "#", description: "Logistics Partner" },
      { name: "EduFabrica", image: eduFabImg, link: "#", description: "Workshop Partner" },
      { name: "gplus", image: gplusImg, link: "#", description: "Associate Partner" },
      {name: "assam", image: assamImg, link: "#", description: "Startup Partner" },
      {name: "zomato", image: zomatoImg, link: "#", description: "PMx Title Partner" },
      {name: "aspire", image: aspireImg, link: "#", description: "Disrupt General Partner" },
      {name: "riot", image: riotImg, link: "#", description: "Cosmic Clash Title Partner" },
      {name: "cdac", image: tunnedImg, link: "#", description: "Computing Partner" },
      {name: "iit", image: iitImg, link: "#", description: "Research Partner" },
      {name:"Easy", image: emtImg, link: "#", description: "Travel Partner" },
      {name: "sos", image: sosImg, link: "#", description: "StartupExpo General Partner" },
      {name: "productFolk", image: productFolkImg, link: "#", description: "PMx Associate Title Partner" },
      {name: "Zoho", image: zohoImg, link: "#", description: "Disrupt Tech Partner" },
      {name: "plural", image: pluralImg, link: "#", description: "Disrupt General Partner" },
      {name: "pitch", image: pitchImg, link: "#", description: "Pitching Partner" },
      {name: "spantech", image: spantechImg, link: "#", description: "Disrupt General Partner" },
      {name: "vakx", image: vakxImg, link: "#", description: "Chatbot Partner" },
      {name: "bharat", image: bharatImg, link: "#", description: "Sparkle Title Partner" },
      {name: "skill", image: skillImg, link: "#", description: "Ecosystem Partner Sparkle" },
      {name: "smallestAi", image: smallestAi, link: "#", description: "Encode Title Sponsor" },
      {name: "kxx", image: kxxImg, link: "#", description: "Online Investment Partner" },
      {name: "ankur", image: ankurImg, link: "#", description: "Online Investment Partner" },
      {name: "yhills", image: YhillsImg, link: "#", description: "Learning Partner" },
      {name: "unstop", image: unstopImg, link: "#", description: "Platform Partner" },
      {name: "codeium", image: codeiumImg, link: "#", description: "Internship Partner" },
      {name: "gekson", image: geksonImg, link: "#", description: "Refreshment Partner" },
      {name: "farmley", image: farmleyImg, link: "#", description: "Munchies Partner" },
      {name: "campus", image: campusImg, link: "#", description: "Youth Partner" },
      {name: "startTalky", image: startTalkyImg, link: "#", description: "Media Partner" },
      {name: "TechStory", image: TechStoryImg, link: "#", description: "Media Partner" },
      {name: "youth", image: youthImg, link: "#", description: "Youth Media Partner" },
      {name: "silicon", image: siliconImg, link: "#", description: "Media Partner" },
      {name: "startupNews", image: startupNewsImg, link: "#", description: "Media Partner" },
      {name: "news18", image: news18Img, link: "#", description: "Media Partner" },
      {name: "bane", image: baneImg, link: "#", description: "Merchandise Partner" },

      
    ]
  },
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
      alt={`${sponsor.name} - ${sponsor.description}`}
      className="sponsor-image"
      loading="lazy"
    />
    <div className="sponsor-name">{sponsor.description}</div>
  </motion.a>
);

const SponsorSection = ({ title, sponsors, className = "" }) => (
  <motion.section
    className={`sponsor-section ${className}`}
    initial="initial"
    whileInView="animate"
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

        {/* {sponsorData.otherPartners.map((section, index) => (
          <SponsorSection 
            key={index}
            title={section.title}
            sponsors={section.sponsors}
            className="other-partners-section"
          />
        ))} */}
      </div>
    </main>
    <Footer />
  </div>
);

export default Sponsors;
