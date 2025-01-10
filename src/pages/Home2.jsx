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


// Images
import wagon1 from '../assets/speaker1.jpg';
import wagon2 from '../assets/speaker2.jpg';
import wagon3 from '../assets/speaker3.jpg';
import wagon4 from '../assets/speaker4.jpg';
import wagon5 from '../assets/speaker5.jpg';



function Home() {
  // Data for train components
  const wagons = [
    { imageUrl: wagon1, title: 'Speaker 1', subtitle: 'Guest Speaker' },
    { imageUrl: wagon2, title: 'Speaker 2', subtitle: 'Keynote Speaker' },
    { imageUrl: wagon3, title: 'Speaker 3', subtitle: 'Panelist' },
    { imageUrl: wagon4, title: 'Speaker 4', subtitle: 'Panelist' },
    { imageUrl: wagon5, title: 'Speaker 5', subtitle: 'Panelist' },
  ];

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

