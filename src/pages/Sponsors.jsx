import React from 'react';
import NavBar from "./nav_bar";
import Footer from "./footer";

const Sponsors = () => (
    <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
            <h1>Sponsors Page</h1>
            {/* Add your events content here */}
        </main>
        <Footer />
    </div>
);

export default Sponsors;