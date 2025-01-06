import React from 'react';
import NavBar from "./nav_bar";
import Footer from "./footer";
import './Schedule.css'
import { motion } from 'framer-motion';

const Schedule = () => (
    <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow mt-20">
            <motion.div
      className="coming-soon-container flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="coming-soon-content"   style={{ background: "linear-gradient(135deg, #0c79b8,rgba(65, 82, 122, 0.53))" }}>
        <h1 >Coming Soon</h1>
        <p>We're working hard to bring something amazing. Stay tuned!</p>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
        </main>
        <Footer />
    </div>
);

export default Schedule;
