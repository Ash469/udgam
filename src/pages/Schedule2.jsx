import React from "react";
import "./Schedule2.css"; // Import CSS for styling

const events = [
    {
        id: 1,
        time: "10:00 AM",
        title: "Inauguration Ceremony",
        description: "Kick-off the event with a grand opening ceremony.",
        location: "Main Auditorium",
    },
    {
        id: 2,
        time: "11:30 AM",
        title: "Keynote Speech",
        description: "Insights from an industry leader on entrepreneurship.",
        location: "Hall A",
    },
    {
        id: 3,
        time: "2:00 PM",
        title: "Workshop: Building Startups",
        description: "Learn the basics of startup creation.",
        location: "Workshop Room 1",
    },
    {
        id: 4,
        time: "4:00 PM",
        title: "Panel Discussion: Future of Tech",
        description: "Discussion with experts about upcoming tech trends.",
        location: "Hall B",
    },
];

const Schedule = () => {
    return (
        <div className="schedule-page">
            <h1 className="schedule-heading">Event Schedule</h1>
            <div className="schedule-container">
                {events.map((event) => (
                    <div className="event-card" key={event.id}>
                        <div className="event-time">{event.time}</div>
                        <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <p className="event-description">{event.description}</p>
                            <p className="event-location">
                                📍 {event.location}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
