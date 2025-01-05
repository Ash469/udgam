import React from 'react';
import event1 from '../assets/internFair2.png';
import event2 from '../assets/startupExpo.png';
import event3 from '../assets/disrupt.png';
import './landing_event.css';

const landing_events = [
    {
        name: 'Unlock industry internships!',
        imageUrl: event1,
        description: 'InternFair 2025 connects students and companies for internships, providing unparalleled networking and learning opportunities. Get ready to explore your future career paths!'
    },
    {
        name: 'Showcase, Network, Innovate.',
        imageUrl: event2,
        description: 'Start-Up Expo 2025 is a premier event connecting startups, investors, VCs, incubators, and government leaders from across India. Don’t miss the chance to elevate your startup!'
    },
    {
        name: 'Pitch Ideas, Win Investments.',
        imageUrl: event3,
        description: 'Disrupt is North-East India’s largest pitching battle, offering startups the opportunity to pitch ideas to investors, VCs, and angels. Finalists receive mentorship, tools, and prizes, with winners securing investments to scale their ventures'
    },
];

const LandingEvents = () => {
    return (
        <div className="events-list">
            {landing_events.map((event, index) => (
                <div
                    key={index}
                    className={`event-card flex flex-col md:flex-row gap-4 m-4 rounded-lg shadow-lg`}
                >
                    {/* Image Section */}
                    <div className="image-container w-full md:w-1/3 relative rounded-lg overflow-hidden">
                        <img
                            src={event.imageUrl}
                            alt={event.name}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <button className="register-btn absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-4 rounded-lg opacity-0 transition-opacity duration-300">
                            Register Now
                        </button>
                    </div>

                    {/* Text Section with dynamic background color */}
                    <div className={`landing-event-text-container w-full md:w-2/3 flex flex-col justify-center p-4 ${index === 0 ? 'bg-teal-800' : index === 1 ? 'bg-yellow-400' : 'bg-blue-600'}`}>
                        <div className="event-description-text">
                            <h1 className="text-xl font-semibold">{event.name}</h1>
                            <p className="text-sm">{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* View More Link */}
            <div className="events-svg flex justify-end items-center pr-16">
                <a href="/events" className="flex items-center hover:underline group">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 transform transition-transform group-hover:translate-x-2">
                        <circle cx="12" cy="12" r="12" fill="#E4013E" />
                        <path d="M19.4484 13.0523V10.9849L13.4137 5.05859L10.4638 5.05859L16.4435 10.9849H4.56836V13.0523H16.4837L10.504 18.9786H13.4542L19.4484 13.0523Z" fill="white" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default LandingEvents;
