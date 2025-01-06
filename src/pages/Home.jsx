import React from 'react';
import { Link, Element } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
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
import './Home.css';

gsap.registerPlugin(MotionPathPlugin);

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
  const redDotRef = useRef(null);

  useEffect(() => {
    const paths = document.querySelectorAll('.motionPath');
    const circles = document.querySelectorAll('.svg-circle');

    const tl = gsap.timeline({
      onUpdate: () => {
        const redDotBounds = redDotRef.current.getBoundingClientRect();
        const redDotCenterX = redDotBounds.left + redDotBounds.width / 2;
        const redDotCenterY = redDotBounds.top + redDotBounds.height / 2;

        circles.forEach((circle) => {
          const circleBounds = circle.getBoundingClientRect();
          const circleCenterX = circleBounds.left + circleBounds.width / 2;
          const circleCenterY = circleBounds.top + circleBounds.height / 2;

          // Check if centers match within a tolerance
          const tolerance = 1;
          const isCenterMatch =
            Math.abs(redDotCenterX - circleCenterX) < tolerance &&
            Math.abs(redDotCenterY - circleCenterY) < tolerance;

          if (isCenterMatch) {
            circle.setAttribute('fill', 'red');
            tl.pause();
            gsap.delayedCall(0.2, () => {
              tl.resume(); // Resumes the timeline after the pause
            });
          }
        });
      }
    });

    paths.forEach((path, index) => {
      const isReverse = index % 2 !== 0 || index === 4;
      const gsapConfig = {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: isReverse ? 1 : 0,
          end: isReverse ? 0 : 1,
        },
        duration: 25,
        delay: index === 0 ? 2 : 0,
        onComplete: () => {
          tl.to(redDotRef.current, gsapConfig);
        }
      };

      tl.add(gsap.from(redDotRef.current, gsapConfig));
    });

    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className="App">
      {/* <div
        className="svg-overlay">
        <svg
          className="responsive-svg"
          width="100%"
          height="auto"
          viewBox="0 0 1288 6459"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <path className="motionPath" opacity="0.15" d="M1265 232V78.5C1265 76.2909 1263.21 74.5 1261 74.5H72.8594C70.6502 74.5 68.8594 72.7091 68.8594 70.5V0" stroke="#22222" stroke-width="10" />
          <path className="motionPath" opacity="0.15" d="M1265 188V1160C1265 1162.21 1263.21 1164 1261 1164H1071.5" stroke="#222222" stroke-width="10" />
          <path className="motionPath" opacity="0.15" d="M1265 2607V2553.5C1265 2551.29 1263.21 2549.5 1261 2549.5H93.5479C91.3388 2549.5 89.5479 2547.71 89.5479 2545.5V1168C89.5479 1165.79 91.3388 1164 93.5479 1164H1071.5" stroke="#222222" stroke-width="10" />
          <path className="motionPath" opacity="0.15" d="M1265 2603V3657" stroke="#222222" stroke-width="10" />
          <path className="motionPath" opacity="0.15" d="M1265 3657V3715C1265 3717.21 1263.21 3719 1261 3719H92.2153C90.6001 3719 89.1435 3719.97 88.5226 3721.46L40.3073 3837.26C40.1044 3837.75 40 3838.27 40 3838.8V4002" stroke="#222222" stroke-width="10" />
          <path className="motionPath" opacity="0.15" d="M40 4373V4430.5C40 4432.71 41.7909 4434.5 44 4434.5H1261C1263.21 4434.5 1265 4436.29 1265 4438.5V4723C1265 4725.21 1263.21 4727 1261 4727H72.9994C70.7903 4727 68.9995 4728.79 68.9995 4731V5206.5L69 6458.5" stroke="#222222" stroke-width="10" />

          <rect id="motionPath" opacity="0.15" y="4002" width="80" height="13" fill="#0C79B8" className="svg-circle" />
          <rect id="motionPath" opacity="0.15" y="4360" width="80" height="13" fill="#0C79B8" />


          <circle cx="88.6274" cy="1595.63" r="16" transform="rotate(-45 88.6274 1595.63)" fill="#FDBF44" className="svg-circle" />
          <circle cx="88.6274" cy="1943.88" r="16" transform="rotate(-45 88.6274 1943.88)" fill="#FDBF44" className="svg-circle" />
          <circle cx="88.6274" cy="2292.14" r="16" transform="rotate(-45 88.6274 2292.14)" fill="#FDBF44" className="svg-circle" />
          <circle cx="1265.62" cy="3106.62" r="16" transform="rotate(-45 1265.62 3106.62)" fill="#FDBF44" className="svg-circle" />
          <circle cx="287.625" cy="4727.19" r="16" fill="#FDBF44" className="svg-circle" />

          <circle cx="686.627" cy="4724.19" r="16" transform="rotate(-45 686.627 4724.19)" fill="#FDBF44" className="svg-circle" />

          <circle cx="1095.63" cy="4724.19" r="16" transform="rotate(-45 1095.63 4724.19)" fill="#FDBF44" className="svg-circle" />

          <circle cx="1264.63" cy="933.625" r="16" transform="rotate(-45 1264.63 933.625)" fill="#FDBF44" className="svg-circle" />

          <circle cx="254" cy="74" r="16" fill="#FDBF44" className="svg-circle" />

          <circle cx="646" cy="74" r="16" fill="#FDBF44" className="svg-circle" />

          <circle cx="1038" cy="74" r="16" fill="#FDBF44" className="svg-circle" />

          <circle cx="69.6274" cy="5824.62" r="16" transform="rotate(-45 69.6274 5824.62)" fill="#FDBF44" className="svg-circle" />
          <circle
            ref={redDotRef}
            cx="1038"
            cy="74"
            r="8"
            fill="red"
          />
        </svg>
      </div> */}


      <NavBar />
      <Start />
      <TextBox title={"What is Udgam?"} style={{ paddingTop: '10px' }} />
      <WhatIsUdgam />
      <TextBox title={"Events Stations"} style={{ transform: 'rotate(180deg)' }} />
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

