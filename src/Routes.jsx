import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
import Home from "./pages/Home2";
import TeamCards from "./pages/TeamCard";
import Event from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Schedule from "./pages/Schedule";
import PassPage from "./pages/PassPage";    

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<TeamCards />} />
                <Route path="/events" element={<Event />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/pass" element={<PassPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
