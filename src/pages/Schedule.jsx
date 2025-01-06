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
             className="coming-soon-container flex justify-center items-center mb-20"
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <div className="coming-soon-content" style={{  background: '#222',  border: '10px solid #225088',borderRadius: '35.725px'}}>
             <h1 className="color-white" style={{  color: ' #F4F5F6',fontFamily:'TT Firs Neue Trl' }}>Coming Soon</h1>
             <p className="color-white" style={{  color: ' #F4F5F6',fontFamily:'PP Mori'  }}>We're working hard to bring something amazing. Stay tuned!</p>
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
