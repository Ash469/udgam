import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Speakers from '../component/Speakers';
import TextBox from '../component/text_box';
import TShirtAdvert from '../component/merch2';
import FAQSection from '../component/inquiry_desk';
import LandingSponsors from '../component/landing_sponsors';
import LandingEvents from '../component/landing_event';
import WhatIsUdgam from '../component/whatisudgam';
import Footer from './footer';
import NavBar from './nav_bar';

import './Home2.css'; // Add styles for timeline and other elements

function Home() {
    const segments = [
        { id: 'whatisudgam', label: 'What is Udgam?' },
        { id: 'events', label: 'Events Stations' },
        { id: 'merch', label: 'Merch Stations' },
        { id: 'speakers', label: 'Speakers Express' },
        { id: '', label: '' }, // Break in the path
        { id: 'sponsors', label: 'Our Sponsors' },
        { id: 'inquiry', label: 'Inquiry Station' },
    ];

    const [activeSection, setActiveSection] = useState('whatisudgam');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        const sectionElements = document.querySelectorAll('section');
        sectionElements.forEach((section) => observer.observe(section));

        return () => {
            sectionElements.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="App">
            <NavBar />
            {/* Timeline Navigation */}
            <div className="highlights-container">
                <div className="highlights">
                    {segments.map((segment, index) => {
                        if (!segment.id) {
                            return (
                                <div key={index} className="label break">
                                    {/* Optional: Add a decorative element */}
                                    <span className="break-decorator"></span>
                                </div>
                            );
                        }
                        return (
                            <div
                                key={segment.id}
                                className={`label ${activeSection === segment.id ? 'active' : ''}`}
                            >
                                <Link to={segment.id} smooth={true} duration={500} offset={-50}>
                                    {segment.label}
                                </Link>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Page Content */}
            <section id="whatisudgam">
                <TextBox title="What is Udgam?" style={{ paddingTop: '10px' }} />
                <WhatIsUdgam />
            </section>
            <section id="events">
                <TextBox title="Events Stations" style={{ transform: 'rotate(180deg)' }} />
                <LandingEvents />
            </section>
            <section id="merch">
                <TextBox title="Merch Stations" />
                <TShirtAdvert />
            </section>
            <section id="speakers">
                <TextBox title="Speakers Express" style={{ transform: 'rotate(180deg)' }} />
                <div className="scroll-break"></div>
                <Speakers />
            </section>
            <section id="sponsors">
                <TextBox title="Our Sponsors" />
                <LandingSponsors />
            </section>
            <section id="inquiry">
                <TextBox title="Inquiry Station" style={{ transform: 'rotate(180deg)' }} />
                <FAQSection />
            </section>
            <Footer />
        </div>
    );
}

export default Home;
