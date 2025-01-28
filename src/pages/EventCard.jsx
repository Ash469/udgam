import { useState } from "react";
import engine from "../assets/engine.png";
import "./EventCard.css";

const lineColors = {
  Blue: { bg: "bg-blue-500", text: "text-blue-500" },
  Purple: { bg: "bg-purple-500", text: "text-purple-500" },
  Orange: { bg: "bg-orange-500", text: "text-orange-500" },
  Teal: { bg: "bg-teal-500", text: "text-teal-500" },
  Pink: { bg: "bg-pink-500", text: "text-pink-500" },
  Indigo: { bg: "bg-indigo-500", text: "text-indigo-500" },
};

export default function EventCard({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(Date.now());  // Unique key to reset animation
  const colors = lineColors[event.line];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date(2000, 0, 1, parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAnimationKey(Date.now());  // Generate new key to reset animation
  };

  return (
    <div
      className="event-card1"
      onMouseEnter={handleMouseEnter}
    >
      <div className={`event-header pt-2 ${colors.bg}`} >
        <div
          className="engine-container left-[25%]"
          key={animationKey} 
          style={{
            animation: isHovered
              ? "moveEngine 3s ease-in-out forwards"
              : "none",
          }}
        >
          <img src={engine} alt="engine" />
          <div className="time-container">{formatTime(event.time)}</div>
        </div>
      </div>

      <div className="event-content">
        <h2 className={`schedule-event-name ${colors.text}`} >{event.name}</h2>
        <p  className="schedule-event-date">
          <span>Date:</span> {event.date}
        </p>
        <p  className="schedule-event-venue">
          <span>Station:</span> {event.venue}
        </p>
      </div>
    </div>
  );
}
