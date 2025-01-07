import React, { useEffect, useState } from "react";
// import Header from "../component/Header";
import Internfair from "../component/Internfair";
import PMx from "../component/PMx";
import Disrupt from "../component/Disrupt";
import Startup from "../component/Startup";
import Encode from "../component/Encode";
import Sparkle from "../component/Sparkle";
import AP from "../component/AP";
import Cosmic from "../component/CC";
import DFrame from "../component/DFrame";
import NavBar from "./nav_bar";
import Footer from "./footer";
import '../styles/fonts.css';

import "./Events.css";
import { Events } from "react-scroll";

function Event() {
  const sections = [
    { id: "internfair", label: "Internfair" },
    { id: "startup", label: "Startup-Expo" },
    { id: "disrupt", label: "Disrupt" },
    { id: "pmx", label: "PMx" },
    { id: "cosmic", label: "Cosmic clash" },
    { id: "encode", label: "Encode" },
    { id: "sparkle", label: "Sparkle" },
    { id: "dframe", label: "DFrame" },
    { id: "ap", label: "Antah Prerna" },
  ];

  const [activePointer, setActivePointer] = useState("internfair");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePointer(entry.target.id);
          }
        });
      },
      {
        root: null, // Default to viewport
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="Events">
     <NavBar />

      {/* Timeline with Pointers */}
      <div className="timeline-container">
        <div className="timeline">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`pointer ${
                activePointer === section.id ? "active" : ""
              }`}
            >
              <span>{section.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="eventname">
        <section id="internfair">
          <Internfair />
        </section>
        <section id="startup">
          <Startup />
        </section>
        <section id="disrupt">
          <Disrupt />
        </section>
        <section id="pmx">
          <PMx />
        </section>
        <section id="cosmic">
          <Cosmic />
        </section>
        <section id="encode">
          <Encode />
        </section>
        <section id="sparkle">
          <Sparkle />
        </section>
        <section id="dframe">
          <DFrame />
        </section>
        <section id="ap">
          <AP />
        </section>
          <Footer />
      </div>
    </div>
  );
}

export default Event;
