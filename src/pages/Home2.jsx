import React from 'react';
import { Link, Element } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Speakers from '../component/Speakers';
import Start from '../component/hero';
import TextBox from '../component/text_box';
import TShirtAdvert from '../component/Merch';
import FAQSection from '../component/inquiry_desk';
import LandingSponsors from '../component/landing_sponsors';
import LandingEvents from '../component/landing_event';
import WhatIsUdgam from '../component/whatisudgam';
import Footer from './footer';
import NavBar from './nav_bar';
import './Home.css';



function Home() {
  const sections = [
    "What is Udgam?",
    "Events Stations",
    "Merch Stations",
    "Speakers Express",
    "Our Sponsors",
    "Inquiry Station"
  ];

  return (
    <div className="App">
      <NavBar />
      <Start />
      <TextBox title={"What is Udgam?"} style={{ paddingTop: '10px' }} />
      <WhatIsUdgam />
      <TextBox title={"Events Stations"} style={{ transform: 'rotate(180deg)',marginBottom:'2rem' }} />
      <LandingEvents />
      <TextBox title={"Merch Stations"} />
      <TShirtAdvert />
      {/* <Merch /> */}
      <TextBox title={"Speakers Express"} style={{ transform: 'rotate(180deg)' }} />
      <Speakers />
      <div style={{ height: '40px' }}></div>
      <TextBox title={"Our Sponsors"} />
      <LandingSponsors />
      {/* <TextBox title={"Inquiry Station"} style={{ transform: 'rotate(180deg)' }} />
        <FAQSection /> */}
      <Footer />
    </div>
  );
}

export default Home;

