import { useState } from "react";
import { events } from "./event";
import EventCard from "./EventCard";
import "./Schedule.css";
import NavBar from "./nav_bar";
import Footer from "./footer";

export default function Schedule() {

  const [filter, setFilter] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const sortedEvents = [...events].sort(
    (a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime()
  );

  const filteredEvents = sortedEvents.filter(
    (event) =>
      event.name.toLowerCase().includes(filter.toLowerCase()) &&
      (!selectedDate || event.date === selectedDate)
  );

  const uniqueDates = Array.from(new Set(events.map((event) => event.date))).sort();

  return (
    <div className="schedule-page">
      <NavBar />
    <div className="space-y-6 mb-4 pl-4 pr-4">
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search events..."
          className="flex-grow p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          className="p-3 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedDate(e.target.value || null)}
          value={selectedDate || ""}
        >
          <option value="" style={{
            FontFamily: 'TT Firs Neue Trl',
             fontSize: '1.2rem',
             fontWeight: '500',
          }}>All Dates</option>
          {uniqueDates.map((date) => (
            <option key={date} value={date}>
              {new Date(date).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}
